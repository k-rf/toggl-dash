-- CreateTable
CREATE TABLE "AnnualObjective" (
    "id" UUID NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "AnnualObjective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Objective" (
    "id" UUID NOT NULL,
    "clientId" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "second" INTEGER NOT NULL,
    "annualObjectiveId" UUID NOT NULL,

    CONSTRAINT "Objective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyAvailableTime" (
    "id" UUID NOT NULL,
    "month" INTEGER NOT NULL,
    "off" INTEGER NOT NULL,
    "annualObjectiveId" UUID NOT NULL,

    CONSTRAINT "MonthlyAvailableTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableTime" (
    "id" UUID NOT NULL,
    "hour" INTEGER NOT NULL,
    "minute" INTEGER NOT NULL,
    "second" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "monthlyAvailableTimeId" UUID NOT NULL,

    CONSTRAINT "AvailableTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Objective" ADD CONSTRAINT "Objective_annualObjectiveId_fkey" FOREIGN KEY ("annualObjectiveId") REFERENCES "AnnualObjective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyAvailableTime" ADD CONSTRAINT "MonthlyAvailableTime_annualObjectiveId_fkey" FOREIGN KEY ("annualObjectiveId") REFERENCES "AnnualObjective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableTime" ADD CONSTRAINT "AvailableTime_monthlyAvailableTimeId_fkey" FOREIGN KEY ("monthlyAvailableTimeId") REFERENCES "MonthlyAvailableTime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
