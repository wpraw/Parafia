USE [Parafia]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 17.02.2022 11:08:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [uniqueidentifier] NOT NULL,
	[Username] [nvarchar](255) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Surname] [nvarchar](255) NOT NULL,
	[NumberPhone] [nvarchar](255) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Posts]    Script Date: 17.02.2022 11:08:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Posts](
	[PostId] [uniqueidentifier] NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](255) NOT NULL,
	[Contents] [nvarchar](2137) NOT NULL,
	[DataDodania] [datetime2](7) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Posts] PRIMARY KEY CLUSTERED 
(
	[PostId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[vPostsUsers]    Script Date: 17.02.2022 11:08:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vPostsUsers] AS 
SELECT 
P.PostId AS PostId, P.UserId AS UserId, P.Title AS Title, P.Contents AS Contents, P.DataDodania AS DataDodania, 
U.Username AS Username, U.Name AS Name, U.Surname AS Nazwisko FROM dbo.Posts P INNER JOIN dbo.Users U ON U.UserId=P.UserId
WHERE P.IsDeleted='0'
GO
/****** Object:  Table [dbo].[Priests]    Script Date: 17.02.2022 11:08:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Priests](
	[PriestId] [uniqueidentifier] NOT NULL,
	[Degree] [nvarchar](255) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Surname] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_Priests] PRIMARY KEY CLUSTERED 
(
	[PriestId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'dfcd2b9d-f28f-43fb-8682-112331577d4c', N'3fa85f64-5717-4562-b3fc-2c963f66afa6', N'Ankieta', N'Zachęcamy do wzięcia udziału w prostej ankiecie dotyczącej naszej Parafii. Kartki z pytaniami znajdują się na stojakach z prasą. Po udzieleniu odpowiedzi należy je do 20 marca wrzucić do stojącej w prezbiterium skrzynki z napisem Ankieta.', CAST(N'2022-02-10T20:35:12.0000000' AS DateTime2), 1)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'3fa85f64-5717-4562-b3fc-2c963f66afa6', N'3fa85f64-5717-4562-b3fc-2c963f66afa6', N'Relikwie', N'Dzięki życzliwości Katolickiego Stowarzyszenia „Civitas Christiana”, podczas wszystkich Mszy będą obecne relikwie bł. Stefana Wyszyńskiego, a kazania wygłosi ks. dr Tadeusz Ceynowa – historyk Kościoła i dyrektor Archiwum Diecezjalnego.', CAST(N'2022-02-06T12:39:26.0000000' AS DateTime2), 0)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'9d131ace-a215-49f8-9726-2ed113eb073d', N'3fa85f64-5717-4562-b3fc-2c963f66afa6', N'Zbiórka', N'Po Mszach prowadzona przez Parafialny Zespół Caritas zbiórka ofiar do puszek z przeznaczeniem na wsparcie potrzebujących w naszej Parafii.', CAST(N'2022-02-10T20:44:16.0000000' AS DateTime2), 1)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'139a3b73-2805-451f-a26b-30722559dcc5', N'3fa85f64-5717-4562-b3fc-2c963f66afa6', N'Różaniec', N'Rycerze św. Jana Pawła II zapraszają na modlitwę różańcową z polskimi świętymi w intencji naszej Ojczyzny o godz. 17. w czwartek', CAST(N'2022-02-06T12:39:57.0000000' AS DateTime2), 1)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'3fa85f64-5717-3562-b3fc-3c963f66afa6', N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'Msza w intencji małżeństw', N'W piątek msza o godz. 13 w intencji małżeństw obchodzących w lutym rocznice i jubileusze. Zgłoszenia w zakrystii lub w kancelarii.', CAST(N'2022-02-07T19:34:26.0000000' AS DateTime2), 0)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'3fa85f64-5117-3262-b3fc-3ccc3f66afa6', N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'Ofiara 1% podatku', N'Caritas rozlicza PIT-y w celu pozyskania 1%. Dokumenty można przynosić do zakrystii po Mszach lub do kancelarii w godzinach jej otwarcia.', CAST(N'2022-02-07T19:34:38.0000000' AS DateTime2), 0)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'3fc85f64-5117-3262-b3fc-3ccc3f66afa6', N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'Podziękowania', N'Dziękujemy bardzo za modlitwę, za wszelką życzliwość i pomoc oraz za ofiary składane na potrzeby naszej Parafii – także w formie wpłat na konto.', CAST(N'2022-02-07T19:34:45.0000000' AS DateTime2), 1)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'3fa85f64-5717-3262-b3fc-3ccc3f66afa6', N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'Podziękowania za przestrzeganie obostrzeń', N'Jesteśmy również wdzięczni za przestrzeganie zaleceń sanitarnych. Nadal prosimy o zasłanianie nosa i ust oraz dezynfekowanie dłoni przy wejściu.', CAST(N'2022-02-07T19:34:35.0000000' AS DateTime2), 0)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'3fa85f64-5717-3562-b3fc-3ccc3f66afa6', N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'Gość niedzielny', N'Polecamy tygodnik „Gość Niedzielny”, w którym trzecia płyta z serii Biblia Audio z Księgami: Kapłańską, Liczb i Powtórzonego Prawa.', CAST(N'2022-02-07T19:34:32.0000000' AS DateTime2), 0)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'3fc85f64-5117-3262-b3fc-3ccc3f6aafa6', N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'Bierzmowanie', N'Spotkanie dla młodzieży przystępującej do bierzmowania w tym tygodniu we wtorek o godzinie 19.30', CAST(N'2022-02-07T19:34:47.0000000' AS DateTime2), 1)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'84c9f632-56a6-4f18-971c-a859c183e55f', N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'Pielgrzymka', N'Zapraszamy serdecznie na pielgrzymkę autokarową na Jasną Górę. Zapisy i szczegóły u księdza proboszcza.', CAST(N'2022-02-13T13:25:56.0000000' AS DateTime2), 0)
INSERT [dbo].[Posts] ([PostId], [UserId], [Title], [Contents], [DataDodania], [IsDeleted]) VALUES (N'540b995f-ca9f-4270-adbd-e884e957ab0e', N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'Pożegnanie', N'W przyszłym miesiącu żegnamy z naszej Parafi księdza Piotra. Życzymy mu sukcesów i powodzenia w nowej diecezji.', CAST(N'2022-02-13T13:25:41.0000000' AS DateTime2), 1)
GO
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'59eea378-fd64-4d9e-9f10-09e6dfc795d1', N'Ks.', N'Adam', N'Natanek')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'14de8e16-23d8-4468-86ba-0f2c968193e6', N'Wikariusz', N'Piotr', N'Nowak')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'3fa85f64-5717-4562-b3fc-2c963f66afa6', N'Ks.', N'Andrzej', N'Dętka')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'c268d83a-cb4c-421b-8b92-61ba15931638', N'Ks.', N'Mateusz', N'Mrówczyński')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'a27f9b89-9f90-4c1b-bebe-68eee8f0a62e', N'Ks. Abp', N'Robert', N'Świst')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'c5d74e73-9e6c-4fc2-a0df-697acd62da54', N'Bp.', N'Paweł', N'Tars')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'61049336-482e-4d82-9501-6a6ec3f0fa52', N'Ks.', N'Mikołaj', N'Świąteczny')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'f77f89ca-6f49-487c-8a6a-757254725c31', N'Ks.', N'Andrzej', N'Rower')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'66f0fbff-13b4-45aa-804c-7cb60398af02', N'Ks.', N'Łukasz', N'Natanek')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'a27c7555-5458-4376-af89-8b10236b9cd5', N'Ks.', N'Bartosz', N'Wachowiak')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'3b5dc712-743d-4260-8fd8-9f87ca26f6d6', N'Wikariusz', N'Andrzej', N'Polski')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'0d54ce21-e2d2-493a-b1a4-af6ebfe2b4ae', N'Ks. Abp', N'Aleksander', N'Stonoga')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'ca24664d-9ba0-4aa8-bbd0-af70b1064d2a', N'Ks.', N'Zbigniew', N'Duda')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'bab09ec3-8d59-4f88-9cd7-bdbad53a2c2d', N'Wikariusz', N'Marcin', N'Gołąbek')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'28dc5b0b-d7b7-438f-bc70-d16046f198e4', N'Ks.', N'Paweł', N'Nowak')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'9a319f95-8ff5-44bd-9390-d4cf77e978ab', N'Wikariusz', N'Michał', N'Anioł')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'ea4f9efa-2ce5-4159-bb9f-e136645e7467', N'Ks.', N'John', N'Kowalski')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'0ddc5ecb-cda9-4658-9f76-e91017ceaed1', N'Ks.', N'Łukasz', N'Buka')
INSERT [dbo].[Priests] ([PriestId], [Degree], [Name], [Surname]) VALUES (N'0a940c2a-0067-4041-8d4a-fbdb56574479', N'Ks.', N'Tadeusz', N'Wachowiak')
GO
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'3fa85f64-5717-4562-b3fc-2c963f66afa6', N'admin1', N'Admin!Qaz123', N'Paweł', N'Szulc', N'667555444', 0)
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'fb8bbda9-1f34-47f8-a45a-4898a05d9ef2', N'admin', N'Admin!Qaz123', N'Andrzej', N'Wojciechowski', N'656777888', 0)
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'191def2b-3239-4b15-9d71-7873c373366c', N'testtest', N'testtest', N'testtest', N'testtest', N'testtest', 1)
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'5386f4c1-a408-44f8-b9ac-79f2d24644d7', N'test00000000000000000001', N'test00000000000000000001', N'test00000000000000000001', N'test00000000000000000001', N'test00000000000000000001', 1)
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'd85d8fda-2f62-473f-9f03-a6b52fd803ca', N'admin15', N'Admin!Qaz123', N'Paweł', N'Szulc', N'667555445', 0)
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'88bf6d2c-91a3-4d41-be12-bee83b252de3', N'admin17', N'Admin!Qaz123', N'Paweł', N'Szulc', N'667555440', 0)
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'01857c1b-55cb-47eb-bc92-c81406866463', N'test0000000000000000000', N'test0000000000000000000', N'test0000000000000000000', N'test0000000000000000000', N'test0000000000000000000', 1)
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'159b4e57-c902-47d7-b2f2-f66cd12d32dc', N'test', N'test123', N'test123', N'test123', N'test123', 0)
INSERT [dbo].[Users] ([UserId], [Username], [Password], [Name], [Surname], [NumberPhone], [IsDeleted]) VALUES (N'72f9c901-a7d1-44fd-bfdf-fe335f295cf4', N'admin12', N'Admin!Qaz123', N'Paweł', N'Szulc', N'667555441', 1)
GO
/****** Object:  Index [UQ__Priests__BE34196603A45E4B]    Script Date: 17.02.2022 11:08:27 ******/
ALTER TABLE [dbo].[Priests] ADD UNIQUE NONCLUSTERED 
(
	[PriestId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [UQ__Users__1788CC4D8A6123C0]    Script Date: 17.02.2022 11:08:27 ******/
ALTER TABLE [dbo].[Users] ADD UNIQUE NONCLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Users__536C85E434342CDF]    Script Date: 17.02.2022 11:08:27 ******/
ALTER TABLE [dbo].[Users] ADD UNIQUE NONCLUSTERED 
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Users__A2BA67DA79998A31]    Script Date: 17.02.2022 11:08:27 ******/
ALTER TABLE [dbo].[Users] ADD UNIQUE NONCLUSTERED 
(
	[NumberPhone] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Posts_UserId_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Posts_UserId_Users_UserId]
GO
USE [master]
GO
ALTER DATABASE [Parafia] SET  READ_WRITE 
GO
