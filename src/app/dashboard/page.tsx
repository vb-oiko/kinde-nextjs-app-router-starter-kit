import { getOrganizations } from "@/app/utils/kinde.utils";

export default async function Dashboard() {
  const organizations = await getOrganizations();
  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-display-2">Organizations</p>
      </div>
      <section className="next-steps-section">
        <pre>{JSON.stringify(organizations, null, 2)}</pre>
      </section>
    </div>
  );
}
