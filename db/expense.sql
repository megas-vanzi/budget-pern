-- Table: public.expense

-- DROP TABLE public.expense;

CREATE TABLE IF NOT EXISTS public.expense
(
    id_expense integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    type character varying(50) COLLATE pg_catalog."default" NOT NULL,
    date date NOT NULL,
    amount numeric(15,2) NOT NULL,
    concept character varying(250) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT expense_pkey PRIMARY KEY (id_expense)
)

TABLESPACE pg_default;

ALTER TABLE public.expense
    OWNER to postgres;



-- Sample insertions for quick demo

insert into expense ("type", "date", "amount", "concept")
values 	('ingreso', '2021-09-20', 20000, 'encargo freelance'),
        ('egreso', '2021-09-25', 1500 , 'dietetica'),
        ('ingreso', '2021-09-26', 15000, 'consultoria'),
        ('egreso', '2021-09-27', 2000 , 'farmacia'),
        ('egreso', '2021-09-29', 3500 , 'gimnasio'),
        ('ingreso', '2021-09-30', 35000, 'proyecto freelance'),
        ('egreso', '2021-10-01', 2000 , 'abono celular'),
        ('egreso', '2021-10-02', 3000 , 'ropa'),
        ('egreso', '2021-10-03', 2500 , 'verduleria'),
        ('ingreso', '2021-10-04', 15000, 'consultoria'),
        ('egreso', '2021-10-05', 2000 , 'dietetica')
