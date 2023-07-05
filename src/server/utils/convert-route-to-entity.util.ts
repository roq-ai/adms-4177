const mapping: Record<string, string> = {
  companies: 'company',
  documents: 'document',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
