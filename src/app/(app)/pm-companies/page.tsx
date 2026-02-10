import { PMCompanyCard } from "@/components/app/pm-company-card";
import { pmCompanies } from "@/data/mock-data";

export default function PMCompaniesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">PM Companies</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Directory of vetted property management companies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {pmCompanies.map((company) => (
          <PMCompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
}
