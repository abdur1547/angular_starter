export type ToastMessageType = 'success' | 'error';

export interface ToastType {
  message: string;
  duration: number;
  type: ToastMessageType;
}

export interface ServerErrorResponse {
  success: boolean;
  errors: Record<string, string[]>[];
}
