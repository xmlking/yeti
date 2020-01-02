import { Params } from '@angular/router';

export interface RouterStateData {
  url: string;
  params: Params;
  queryParams: Params;
  breadcrumbs: Map<string, string>;
  data: any;
}
