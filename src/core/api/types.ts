import { NextRequest, NextResponse } from 'next/server';

export type ErrorMessage = {
  message: string;
};

export type RouteHandlerContext<
  TQueryProps = Record<string, string | string[]>
> = {
  params: TQueryProps;
};

export interface ReqCustomProps<TQueryProps, TBody>
  extends Omit<NextRequest, 'json'> {
  json: () => Promise<TBody>;
  _: TQueryProps;
}

export type RequestQueryHandler<TQueryProps, TResponse> = (
  req: ReqCustomProps<TQueryProps, unknown>,
  ctx: RouteHandlerContext<TQueryProps>
) => NextResponse<TResponse> | Promise<NextResponse<TResponse>>;

export type RequestBodyHandler<TBodyProps, TResponse> = (
  req: ReqCustomProps<unknown, TBodyProps>,
  ctx: RouteHandlerContext
) => NextResponse<TResponse> | Promise<NextResponse<TResponse>>;

export type RequestQueryBodyHandler<TQueryProps, TBodyProps, TResponse> = (
  req: ReqCustomProps<TQueryProps, TBodyProps>,
  ctx: RouteHandlerContext<TQueryProps>
) => NextResponse<TResponse> | Promise<NextResponse<TResponse>>;

export type RequestHandler<TResponse> = (
  req: ReqCustomProps<unknown, unknown>,
  ctx: RouteHandlerContext
) => NextResponse<TResponse> | Promise<NextResponse<TResponse>>;

export type TNextRequest = (
  req: NextRequest,
  ctx: RouteHandlerContext
) => NextResponse | Promise<NextResponse>;
