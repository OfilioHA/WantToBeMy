
type sex = 1 | 0 | null;

export interface FormMessage {
    from: {
      name: string;
      gender: sex;
    };
    to: {
      name: string;
      gender: sex;
    };
  }