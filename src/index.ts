export namespace Aqueduct {
  export interface Task {
    id: number;
    state: TaskState;
    meta: string | null;
    result: string | null;
    start_time: string; // UTC ISO time
    end_time: string; // UTC ISO time
  }

  export enum TaskState {
    UNSTARTED = 0,
    STARTED = 1,
    COMPLETED = 2,
    FAILED = 3,
    CANCELLED = 4,
  }

  export interface ServerAttributes {
    motd: string;
    world_name: string;
    ip: string;
    port: number;
    path: string;
    jar_name: string;
    properties: string;
  }

  export interface Server extends ServerAttributes {
    id: number;
    pid: number | null;
    running: boolean;
  }

  export type ServerCommand = "start" | "stop" | "restart";
}
