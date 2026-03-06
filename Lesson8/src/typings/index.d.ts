// сюда записываем только типы, интерфейсы 
// (так как этот файл не компилируется)

export interface ICommand_ {
    nameCommand: string;
    execute(): void;
}


export interface ICommand {
    commandName: string;
    execute(): void;
};