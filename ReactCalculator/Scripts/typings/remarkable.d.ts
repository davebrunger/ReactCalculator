// File created as I couldn't find any Typescript definitions for Remarkable.

declare namespace __Remarkable {
    class Remarkable {
        public render(message : string) : string;
    }
}

declare module "remarkable" {
    import Remarkable = __Remarkable.Remarkable;
    export = Remarkable;
}

