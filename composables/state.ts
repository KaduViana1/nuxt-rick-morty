export const useUserName = () =>
  useState<string | null>('userName', () => null);
export const useUserId = () => useState<string | null>('userId', () => null);
