/** @format */

import UserDashboard from "@/components/UserDashboard";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen dark:bg-gray-900">
      <div className="container">
        <UserDashboard />
      </div>
    </div>
  );
}
