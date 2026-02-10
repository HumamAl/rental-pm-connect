export function ArchitectureDiagram() {
  return (
    <div className="space-y-0">
      {/* Top Layer — Frontend */}
      <div className="rounded-lg border border-indigo-200 bg-indigo-50/50 p-4">
        <p className="text-xs font-medium text-indigo-500 mb-2">Frontend</p>
        <div className="flex justify-center">
          <div className="rounded-md border border-indigo-200 bg-white px-4 py-2">
            <p className="text-sm font-medium text-indigo-700">Next.js App</p>
          </div>
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="h-6 w-px bg-border" />
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-border" />
        </div>
      </div>

      {/* Middle Layer — Backend */}
      <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
        <p className="text-xs font-medium text-green-500 mb-2">Backend</p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="rounded-md border border-green-200 bg-white px-4 py-2">
            <p className="text-sm font-medium text-green-700">API Gateway</p>
          </div>
          <div className="rounded-md border border-green-200 bg-white px-4 py-2">
            <p className="text-sm font-medium text-green-700">Matching Engine</p>
          </div>
          <div className="rounded-md border border-green-200 bg-white px-4 py-2">
            <p className="text-sm font-medium text-green-700">Notification Service</p>
          </div>
        </div>
      </div>

      {/* Arrow down */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="h-6 w-px bg-border" />
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-border" />
        </div>
      </div>

      {/* Bottom Layer — External Services & Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-lg border border-orange-200 bg-orange-50/50 p-4">
          <p className="text-xs font-medium text-orange-500 mb-2">External Services</p>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-md border border-orange-200 bg-white px-3 py-1.5">
              <p className="text-xs font-medium text-orange-700">SendGrid</p>
            </div>
            <div className="rounded-md border border-orange-200 bg-white px-3 py-1.5">
              <p className="text-xs font-medium text-orange-700">Stripe</p>
            </div>
            <div className="rounded-md border border-orange-200 bg-white px-3 py-1.5">
              <p className="text-xs font-medium text-orange-700">Airbnb/VRBO APIs</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-4">
          <p className="text-xs font-medium text-purple-500 mb-2">Data</p>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-md border border-purple-200 bg-white px-3 py-1.5">
              <p className="text-xs font-medium text-purple-700">PostgreSQL</p>
            </div>
            <div className="rounded-md border border-purple-200 bg-white px-3 py-1.5">
              <p className="text-xs font-medium text-purple-700">Redis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
