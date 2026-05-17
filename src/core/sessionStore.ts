interface Session {
  id: string;
  command: string;
  data: Record<string, unknown>;
  createdAt: number;
}

export class SessionStore {
  private sessions: Map<string, Session> = new Map();

  create(id: string, command: string): Session {
    const session: Session = {
      id,
      command,
      data: {},
      createdAt: Date.now()
    };
    this.sessions.set(id, session);
    return session;
  }

  get(id: string): Session | undefined {
    return this.sessions.get(id);
  }

  update(id: string, data: Record<string, unknown>): void {
    const session = this.sessions.get(id);
    if (session) {
      session.data = { ...session.data, ...data };
    }
  }

  delete(id: string): void {
    this.sessions.delete(id);
  }

  clear(): void {
    this.sessions.clear();
  }
}