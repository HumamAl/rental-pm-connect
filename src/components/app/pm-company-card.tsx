import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle } from "lucide-react";
import type { PMCompany } from "@/lib/types";

interface PMCompanyCardProps {
  company: PMCompany;
}

function formatPropertyType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function PMCompanyCard({ company }: PMCompanyCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>{company.name}</CardTitle>
          {company.verified && (
            <Badge className="bg-green-100 text-green-800 border-transparent">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>
        <CardDescription>{company.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {company.propertyTypes.map((type) => (
              <Badge key={type} variant="secondary">
                {formatPropertyType(type)}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Properties</p>
              <p className="font-semibold">{company.propertiesManaged}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Rating</p>
              <p className="font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                {company.rating}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Experience</p>
              <p className="font-semibold">{company.yearsInBusiness} yrs</p>
            </div>
          </div>

          <div className="text-sm">
            <p className="text-muted-foreground">Fee Range</p>
            <p className="font-semibold">{company.feeRange}</p>
          </div>

          <div className="text-sm">
            <p className="text-muted-foreground">Service Area</p>
            <p>{company.serviceArea.join(", ")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
