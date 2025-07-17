"use client";

import { Button, Grid } from "@mui/material";
import Card from "@/components/card";
import { Typography } from "@mui/material";
import TextBlock from "@/components/text-block";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-screen justify-start items-start p-10 gap-[30px]">
      <div className="flex gap-5 items-center">
        <Typography variant="body1">Площадка 1</Typography>
        <div className="bg-[#2e7d32] rounded-[4px] flex items-center min-h-full px-4 py-1.5">
          <Typography sx={{ color: "#FFFFFF" }}>ГИП И</Typography>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-10">
          <Typography variant="h5">Заявка №1909</Typography>
          <div className="bg-[#2e7d32] rounded-[4px] flex items-center min-h-full px-4 py-1.5">
            <Typography sx={{ color: "#FFFFFF" }}>Оплачено</Typography>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Button variant="contained">Первичная сдача</Button>
          <Button variant="contained">Задачи</Button>
        </div>
      </div>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <TextBlock>
              <Typography variant="body2">ФИО</Typography>
              <Typography variant="body2" fontWeight={600}>
                Иванов Иван Иванович
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Гражданство</Typography>
              <Typography variant="body2" fontWeight={600}>
                Российская Федерация
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Паспорт серия/номер</Typography>
              <Typography variant="body2" fontWeight={600}>
                1234/123456
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Пол</Typography>
              <Typography variant="body2" fontWeight={600}>
                Мужской
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Дата рождения</Typography>
              <Typography variant="body2" fontWeight={600}>
                01.01.1990
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Включен в состав НРС</Typography>
              <Typography variant="body2" color={"error"} fontWeight={600}>
                Нет
              </Typography>
            </TextBlock>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <TextBlock>
              <Typography variant="body2">Тип заявки</Typography>
              <Typography variant="body2" fontWeight={600}>
                Первичная сдача
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Квалификация</Typography>
              <Typography variant="body2" fontWeight={600}>
                Главный иженер проекта (специалист по организации инженерных
                изысканий) (7 уровень квалификации)
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Площадка</Typography>
              <Typography variant="body2" fontWeight={600}>
                Общество с ограниченной ответственностью “Площадка 1”
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Представитель</Typography>
              <Typography variant="body2" fontWeight={600}>
                Агент 1
              </Typography>
            </TextBlock>
            <div className="flex gap-4 items-center">
              <TextBlock>
                <Typography variant="body2">Статус</Typography>
                <Typography variant="body2" fontWeight={600}>
                  Обновлено - 25.03.2025б 12:14
                </Typography>
              </TextBlock>
              <div className="px-3 py-2 rounded-[4px] border-[1px] border-[#2e7d32]">
                <Typography variant="body1" color="success">
                  Экзамен пройден
                </Typography>
              </div>
            </div>
            <TextBlock>
              <Typography variant="body2">Отметка готовности</Typography>
              <div className="relative pl-4">
                <div className="absolute min-h-full min-w-[5px] left-0 bg-[#2e7d32] rounded"></div>
                <TextBlock>
                  <Typography variant="body2" fontWeight={600}>
                    Документы на оплату готовы
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    Документы разнесены
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    Данные расписаны
                  </Typography>
                  <Typography variant="body2" fontWeight={600} color="success">
                    Оплачено
                  </Typography>
                </TextBlock>
              </div>
            </TextBlock>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <Typography variant="h5" fontWeight={600}>
              Услуги
            </Typography>
            <TextBlock>
              <Typography variant="body1">
                Стоимость услуги: <strong>тест</strong>
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                20 000 RUB
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body1">
                Стоимость услуги: <strong>задачи</strong>
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                0 RUB
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body1">
                Стоимость услуги: <strong>Госпошлига ГИП И</strong>
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                23 100 RUB
              </Typography>
            </TextBlock>
            <div className="relative pb-4">
              <TextBlock>
                <Typography variant="body1">Обучение опалчено</Typography>
                <Typography variant="body1" fontWeight={600}>
                  20 000 RUB из 20 000 RUB
                </Typography>
              </TextBlock>
              <div className="absolute bottom-0 h-[5px] w-full bg-[#2e7d32] rounded-full"></div>
            </div>
            <div className="relative pb-4">
              <TextBlock>
                <Typography variant="body1">Госпошлина оплачена</Typography>
                <Typography variant="body1" fontWeight={600}>
                  23 100 RUB из 23 100 RUB
                </Typography>
              </TextBlock>
              <div className="absolute bottom-0 h-[5px] w-full bg-[#2e7d32] rounded-full"></div>
            </div>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <Typography variant="h5" fontWeight={600}>
              Информация об экзамене
            </Typography>
            <TextBlock>
              <Typography variant="body2">Площадка</Typography>
              <Typography variant="body2" fontWeight={600}>
                Общество с ограниченной ответственностью
                &quot;ПРОФСПЕЦУПРАВЛЕНИЕ&quot;
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Дата экзамена</Typography>
              <Typography variant="body2" fontWeight={600}>
                24.03.2025, 13:00
              </Typography>
            </TextBlock>
            <TextBlock>
              <Typography variant="body2">Тип записи</Typography>
              <Typography variant="body2" fontWeight={600}>
                Запись
              </Typography>
            </TextBlock>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
