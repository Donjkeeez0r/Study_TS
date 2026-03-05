// сюда записываем только типы, интерфейсы 
// (так как этот файл не компилируется)

export interface ICommand {
    nameCommand: string;
    execute(): void;
}