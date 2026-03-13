// exec - вызывает напрямую какую-то команду внутри пк
import { exec } from 'node:child_process';

export class PcService {
    public launchGame(): void {
        console.log(`Поступила команда на запуск`);

        /* 
        если windows: calc
        mac: open -a Calculator
        Ubuntu, Fedora, Debian: gnome-calculator
        Linux KDE: kcalc
        */ 
        
        /* 
        для запуска игр нужно указать путь в команду:
        Win: C:\\Games\\...\\Game.exe
        */ 

        // команда для запуска
        const command = 'gnome-calculator'

        // запуск команды
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Ошибка запуска: `, error);
                return;
            }

            console.log(`Программа успешно запустилась!`);
        });
    }
}