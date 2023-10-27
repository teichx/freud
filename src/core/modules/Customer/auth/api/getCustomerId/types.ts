export type HandleGetCustomerId = () => Promise<
  | {
      customerId: string;
      authError: '';
    }
  | {
      customerId?: undefined;
      authError: string;
    }
>;
