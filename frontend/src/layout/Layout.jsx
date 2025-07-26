import "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Outlet, Link, Navigate } from "react-router-dom";

export function Layout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <div></div>
      </header>
    </div>
  );
}
