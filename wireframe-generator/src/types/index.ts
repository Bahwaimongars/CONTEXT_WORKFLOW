export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface File {
  id: string;
  filename: string;
  originalName: string;
  content: string;
  size: number;
  mimeType: string;
  uploadedAt: Date;
  userId: string;
}

export interface WireframeContent {
  elements: WireframeElement[];
  layout: string;
  metadata?: Record<string, unknown>;
}

export interface WireframeElement {
  id: string;
  type: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  properties: Record<string, unknown>;
}

export interface Wireframe {
  id: string;
  title: string;
  description?: string;
  content: WireframeContent;
  status: WireframeStatus;
  createdAt: Date;
  updatedAt: Date;
  fileId: string;
  userId: string;
}

export enum WireframeStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
