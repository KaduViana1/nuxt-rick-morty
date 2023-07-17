export const useUserName = () =>
  useState<string | null>('userName', () => null);
export const useUserId = () => useState<string | null>('userId', () => null);
export const useDeleteComment = () =>
  useState<{ modalOpen: boolean; commentId: string; refetch: boolean }>(
    'deleteModal',
    () => {
      return { modalOpen: false, commentId: '', refetch: false };
    }
  );
