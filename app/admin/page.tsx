"use client";

import { useState, useEffect } from "react";

interface Settings {
  showInstagram: boolean;
  showLinkedin: boolean;
  siteDown: boolean;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ================= FETCH SETTINGS ================= */

  useEffect(() => {
    if (isAuthenticated) fetchSettings();
  }, [isAuthenticated]);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/settings");
      const data = await res.json();
      setSettings(data);
    } catch (err) {
      setError("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGIN ================= */

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Invalid password");
        return;
      }

      setIsAuthenticated(true);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= TOGGLE ================= */

  const handleToggle = async (
    field: "showInstagram" | "showLinkedin" | "siteDown"
  ) => {
    if (!settings) return;

    const updatedSettings = {
      ...settings,
      [field]: !settings[field],
    };

    // Optimistic update (instant UI change)
    setSettings(updatedSettings);
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Password": password,
        },
        body: JSON.stringify(updatedSettings),
      });

      if (!res.ok) throw new Error();

      setSuccess("Updated successfully");
      setTimeout(() => setSuccess(""), 2000);
    } catch {
      setError("Update failed");
      fetchSettings(); // rollback if error
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOGIN SCREEN ================= */

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-md space-y-4 w-80"
        >
          <h2 className="text-lg font-semibold text-center">
            Admin Login
          </h2>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full p-2 rounded"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Checking..." : "Login"}
          </button>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
        </form>
      </div>
    );
  }

  /* ================= ADMIN PANEL ================= */

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6">
        <h1 className="text-xl font-bold text-center">
          Admin Panel
        </h1>

        {settings && (
          <>
            <ToggleItem
              label="Instagram"
              description={
                settings.showInstagram
                  ? "Visible on website"
                  : "Hidden from website"
              }
              enabled={settings.showInstagram}
              onClick={() => handleToggle("showInstagram")}
              disabled={loading}
            />

            <ToggleItem
              label="LinkedIn"
              description={
                settings.showLinkedin
                  ? "Visible on website"
                  : "Hidden from website"
              }
              enabled={settings.showLinkedin}
              onClick={() => handleToggle("showLinkedin")}
              disabled={loading}
            />

            <ToggleItem
  label="Site Maintenance Mode"
  description={
    settings.siteDown
      ? "Website is currently DOWN"
      : "Website is LIVE"
  }
  enabled={settings.siteDown}
  onClick={() => handleToggle("siteDown")}
  disabled={loading}
/>
          </>
        )}

        {success && (
          <p className="text-green-600 text-center">{success}</p>
        )}

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        {loading && (
          <p className="text-gray-500 text-center text-sm">
            Processing...
          </p>
        )}
      </div>
    </div>
  );
}

/* ================= REUSABLE TOGGLE COMPONENT ================= */

function ToggleItem({
  label,
  description,
  enabled,
  onClick,
  disabled,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
          enabled ? "bg-green-500" : "bg-gray-400"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-300 ${
            enabled ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}