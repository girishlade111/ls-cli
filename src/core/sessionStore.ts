import { randomUUID } from "crypto";

export interface Session {
  id: string;
  command: string;
  history: { role: string; content: string }[];
  createdAt: Date;
}

export class SessionStore {
  private sessions: Map<string, Session> = new Map();

  create(command: string): Session {
    const id = randomUUID();
    const session: Session = {
      id,
      command,
      history: [],
      createdAt: new Date(),
    };
    this.sessions.set(id, session);
    return session;
  }

  get(id: string): Session | undefined {
    return this.sessions.get(id);
  }

  addMessage(sessionId: string, role: string, content: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.history.push({ role, content });
    }
  }

  clear(id: string): void {
    this.sessions.delete(id);
  }

  clearAll(): void {
    this.sessions.clear();
  }
}
