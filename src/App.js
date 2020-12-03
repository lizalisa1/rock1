import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1> Легенды рока</h1>

      <BrowserRouter>
        <ul>
          <button href="#" class="bit">
            <NavLink
              activeClassName="nav-el-selected"
              className="nav-el"
              to="/glavnoe"
            >
              История рока
            </NavLink>
          </button>
          <button href="#" class="bit">
            <NavLink
              activeClassName="nav-el-selected"
              className="nav-el"
              to="/thebeatles"
            >
              The Beatles
            </NavLink>
          </button>
          <button href="#" class="bit">
            <NavLink
              activeClassName="nav-el-selected"
              className="nav-el"
              to="/AC/DC"
            >
              AC/DC
            </NavLink>
          </button>
          <button href="#" class="bit">
            <NavLink
              activeClassName="nav-el-selected"
              className="nav-el"
              to="/trs"
            >
              The Rolling Stones
            </NavLink>
          </button>
          <button href="#" class="bit">
            <NavLink
              activeClassName="nav-el-selected"
              className="nav-el"
              to="/n"
            >
              Nirvana
            </NavLink>
          </button>
          <button href="#" class="bit">
            <NavLink
              activeClassName="nav-el-selected"
              className="nav-el"
              to="/jon"
            >
              Elton Hercules John
            </NavLink>
          </button>
          <button href="#" class="bit">
            <NavLink
              activeClassName="nav-el-selected"
              className="nav-el"
              to="/elvis"
            >
              Elvis Aaron Presley
            </NavLink>
          </button>
        </ul>
        <Switch>
          <Route path="/glavnoe">
            <img src="https://eddietrunk.com/wp-content/uploads/2019/09/RockMusic600.jpg" />
            <p>
              Рок-му́зыка (англ. Rock music) — обобщающее название ряда
              направлений популярной музыки. Слово rock (в переводе с
              английского «качать», «укачивать», «качаться») в данном случае
              указывает на характерные для этих направлений ритмические
              ощущения, связанные с определённой формой движения, по аналогии с
              roll, twist, swing, shake… Такие признаки рок-музыки, как
              использование электромузыкальных инструментов, творческая
              самодостаточность (для рок-музыкантов характерно исполнение
              композиций собственного сочинения), являются вторичными и часто
              вводят в заблуждение. По этой причине принадлежность некоторых
              стилей музыки к року оспаривается.
            </p>
            <p>
              {" "}
              Истоки рок-музыки лежат в блюзе, из которого и вышли первые
              рок-жанры — рок-н-ролл и рокабилли. Первые поджанры рок-музыки
              возникали в тесной связи с народной и эстрадной музыкой того
              времени — в первую очередь это фолк, кантри, скиффл, мюзик-холл.
              За время существования рок-музыки её пытались соединить
              практически со всеми возможными жанрами музыки — с академической
              музыкой (арт-рок, появился в конце 60-х, и более поздний
              симфо-метал), джазом (джаз-рок, появился в конце 60-х — начале
              70-х), латинской музыкой (латино-рок, появился в конце 60-х),
              индийской музыкой (рага-рок, появился в середине 60-х). В 60—70-х
              появились практически все крупнейшие поджанры рок-музыки, более
              важные из них, кроме перечисленных — хард-рок, панк-рок,
              рок-авангард. В конце 70-х — начале 80-х появились такие жанры
              рок-музыки, как постпанк, новая волна, альтернативный рок (но в
              конце 60-х появились ранние представители этого направления),
              хардкор (крупный поджанр панк-рока), а позже и экстремальные
              поджанры метала — дэт-метал, блэк-метал. В 90-х получили широкое
              развитие жанры гранж (появился в середине 80-х), брит-поп
              (появился в середине 60-х), альтернативный метал (появился в конце
              80-х).
            </p>
          </Route>
          <Route path="/thebeatles">
            <img src="beatles.jpg" />
            <p>
              The Beatles ("Битлз",также группу называют «Ливерпульской
              четвёркой») отдельно участников ансамбля называют «битлами»; в
              английском языке также распространено упоминание группы как Fab
              Four — «Великолепная четвёрка») — британская рок-группа из
              Ливерпуля, основанная в 1960 году, в составе которой играли Джон
              Леннон, Пол Маккартни, Джордж Харрисон и Ринго Старр. Также в
              разное время в составе группы выступали Стюарт Сатклифф, Пит Бест
              и Джимми Никол. Большинство композиций The Beatles созданы в
              соавторстве и подписаны именами Джона Леннона и Пола Маккартни.
              Дискография группы включает 13 официальных студийных альбомов,
              изданных в 1963—1970 годах, и 211 песен.
            </p>
            <p>
              {" "}
              Начав с подражания классикам американского рок-н-ролла 1950-х
              годов, The Beatles пришли к собственному стилю и звучанию. The
              Beatles оказали значительное влияние на рок-музыку и признаются
              специалистами одной из наиболее успешных групп XX века, как в
              творческом, так и в коммерческом смысле. Многие известные
              рок-музыканты признают, что стали таковыми под влиянием песен The
              Beatles. С момента выпуска сингла «Please Please Me / Ask Me Why»
              в 1963 году группа начала восхождение к успеху, породив своим
              творчеством глобальное явление — битломанию. Четвёрка стала первой
              британской группой, пластинки которой завоевали популярность и
              первые места в чартах США, и с неё началось всемирное признание
              британских коллективов, а также «ливерпульского» (Merseybeat)
              звучания рок-музыки. Музыкантам группы и их продюсеру и
              звукорежиссёру Джорджу Мартину принадлежат новаторские разработки
              в области звукозаписи, комбинирования различных стилей, включая
              симфоническую и психоделическую музыку, а также съёмок
              видеоклипов.
            </p>
            <p>
              {" "}
              Журнал Rolling Stone поставил The Beatles на 1-е место в списке
              величайших исполнителей всех времён. В списке Rolling Stone 500
              первое место занимает альбом Sgt. Pepper’s Lonely Hearts Club
              Band. Группа завоевала десять наград «Грэмми». Вся четвёрка, в
              знак признания заслуг перед страной, награждена орденами
              Британской империи (MBE). По состоянию на 2001 год только в США
              было продано свыше 163 миллионов дисков группы. Общий объём продаж
              единиц медиаконтента (диски и кассеты), связанного с группой, на
              этот момент превысил один миллиард экземпляров.
            </p>
            <p>
              {" "}
              The Beatles прекратили совместную работу в 1970 году, хотя уже по
              меньшей мере с 1967 года Пол и Джон вели собственные проекты.
              После распада каждый из музыкантов продолжил сольную карьеру. В
              1980 году возле своего дома в Нью-Йорке был убит Джон Леннон, в
              2001 году от рака скончался Джордж Харрисон. Пол Маккартни и Ринго
              Старр продолжают заниматься творчеством и пишут музыку.
            </p>
          </Route>
          <Route path="/AC/DC">
            <img src="https://www.castlerock.ru/upload/medialibrary/42e/42ef1bcd550d4ede3d0486d92151e977.jpg" />
            <p>
              AC/DC (сокр. от англ. alternating current/direct current
              «переменный ток/постоянный ток») — австралийская рок-группа,
              сформированная в Сиднее в ноябре 1973 года выходцами из Шотландии,
              братьями Малькольмом и Ангусом Янгами.
            </p>
            <p>
              Наряду с такими группами, как Led Zeppelin, Deep Purple, Queen,
              Iron Maiden, Scorpions, Black Sabbath, Uriah Heep, Judas Priest и
              Motörhead, AC/DC часто рассматриваются как пионеры хард-рока и
              хеви-метала. Сами же музыканты классифицировали свою музыку как
              рок-н-ролл, поскольку в её основе лежит ритм-н-блюз с сильно
              искажённым звучанием ритмической и соло-гитар.
            </p>
            <p>
              Коллектив прошёл через несколько изменений составов, прежде чем в
              1975 году был издан первый альбом группы, High Voltage. Состав
              группы оставался неизменным, пока бас-гитарист Марк Эванс не был
              заменён Клиффом Уильямсом в 1977 году. 19 февраля 1980 года от
              сильного алкогольного опьянения умер вокалист и автор песен
              коллектива Бон Скотт. Группа имела все шансы распасться, однако
              замена Скотту была найдена в лице бывшего вокалиста группы Geordie
              Брайана Джонсона. В том же году группа записала свой самый
              продаваемый альбом — Back in Black.
            </p>
            <p>
              Коллектив продал свыше 200 миллионов экземпляров альбомов по всему
              миру, включая 72 миллиона в США. Самый успешный альбом, Back in
              Black, был продан в количестве более 22 миллионов в США и более 42
              миллионов за их пределами. В целом AC/DC является самой успешной и
              известной рок-группой из Австралии и одной из популярнейших в
              мире.
            </p>
          </Route>
          <Route path="/trs">
            <img src="https://i.guim.co.uk/img/media/506c3749f374137d4ad2aacb31c1a67946b4d657/86_97_5803_3482/master/5803.jpg?width=1200&quality=85&auto=format&fit=max&s=f7c3bb8b1855a387326f22076bd9a6e3" />
            <p>
              {" "}
              The Rolling Stones ( букв. с англ. «катящиеся камни»,
              идиоматический перевод — «вольные странники» или бродяги) —
              британская рок-группа, образовавшаяся 12 июля 1962 года и многие
              годы соперничавшая по популярности с The Beatles. The Rolling
              Stones, ставшие важной частью Британского вторжения, считаются
              одной из самых влиятельных и успешных групп в истории рока. The
              Rolling Stones, которые по замыслу менеджера Эндрю Луга Олдэма
              должны были стать «бунтарской» альтернативой The Beatles, уже в
              1969 году в ходе американского турне рекламировались как
              «величайшая рок-н-ролльная группа в мире» и (согласно Allmusic)
              сумели сохранить этот статус по сей день.
            </p>
            <p>
              {" "}
              Музыкальный стиль The Rolling Stones, формировавшийся под влиянием
              Роберта Джонсона, Бадди Холли, Элвиса Пресли, Чака Берри, Бо
              Диддли и Мадди Уотерса, с течением времени обретал индивидуальные
              черты; авторский дуэт Джаггер-Ричардс получил в конечном итоге
              всемирное признание.
            </p>
            <p>
              Группа выпустила в Великобритании двадцать три студийных и восемь
              концертных альбомов. Двадцать один сингл входил в первую десятку
              UK Singles Chart, 8 из них поднимались на вершину хит-парада;
              соответствующие показатели The Rolling Stones в Billboard Hot 100
              — 28 и 8.
            </p>
            <p>
              {" "}
              Общемировой тираж альбомов The Rolling Stones превысил 250
              миллионов, 200 миллионов из них были проданы в США; по этим
              показателям группа является одной из самых успешных в истории. В
              1989 году The Rolling Stones были включены в Зал славы
              рок-н-ролла, а в 2004 году заняли четвёртое место в списке «50
              величайших исполнителей всех времён по версии журнала Rolling
              Stone».
            </p>
          </Route>
          <Route path="/n">
            <img src="https://legav.ru/wp-content/uploads/2019/09/nirvana-e1568712255195.jpg" />
            <p>
              Nirvana — американская рок-группа, созданная вокалистом и
              гитаристом Куртом Кобейном и басистом Кристом Новоселичем в
              Абердине, штат Вашингтон, в 1987 году. В составе коллектива
              сменились несколько барабанщиков; дольше всех с группой играл
              ударник Дэйв Грол, присоединившийся к Кобейну и Новоселичу в 1990
              году.
            </p>
            <p>
              В 1989 году Nirvana стала частью сиэтлской музыкальной сцены,
              выпустив на инди-лейбле Sub Pop дебютный альбом Bleach. После
              подписания контракта с крупным лейблом DGC Records Nirvana
              приобрела неожиданный успех с песней «Smells Like Teen Spirit» из
              своего второго альбома Nevermind, выпущенного в 1991 году.
              Впоследствии Nirvana вошла в музыкальный мейнстрим, популяризовав
              поджанр альтернативного рока, названный гранжем. Курт Кобейн
              оказался в глазах СМИ не просто музыкантом, а «голосом поколения»,
              а Nirvana стала флагманом «поколения Х». В 1993 году вышел третий
              и последний студийный альбом группы, In Utero, композиции которого
              в музыкальном плане сильно отличались от предыдущих работ
              коллектива.
            </p>
            <p>
              Недолгая, но яркая история группы прервалась в связи со смертью
              Курта Кобейна 5 апреля 1994 года, но в последующие годы
              известность команды лишь росла. В 2002 году незавершённая
              демозапись песни «You Know You’re Right», над которой группа
              работала незадолго до смерти Кобейна, заняла первые строчки
              мировых хит-парадов. Со времени выхода дебютного альбома записи
              Nirvana были проданы в количестве 75 миллионов экземпляров по
              всему миру, и в 25 миллионов копий в США.
            </p>
          </Route>
          <Route path="/jon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Elton_John_2011_Shankbone_2.JPG/250px-Elton_John_2011_Shankbone_2.JPG" />
            <p>
              Сэр Э́лтон Геркулес Джон (англ. Elton Hercules John, урожд.
              Ре́джинальд Ке́ннет Дуа́йт (англ. Reginald Kenneth Dwight); род. 25
              марта 1947, Пиннер, Мидлсекс, Англия, Великобритания) — британский
              певец, пианист и композитор, радиоведущий. Оказал заметное влияние
              на развитие лёгкого рока. Один из самых коммерчески успешных
              исполнителей 1970-х годов и один из самых успешных
              рок-исполнителей Великобритании. За всю свою карьеру он продал в
              США и Великобритании больше альбомов, чем любой другой британский
              соло-исполнитель.
            </p>
            <p>
              Он работал с поэтом-песенником Берни Топином с 1967 года; они
              сотрудничали на более чем 30 альбомах. На протяжении своей
              50-летней карьеры Элтон Джон продал более 300 миллионов пластинок,
              что сделало его одним из самых продаваемых музыкальных
              исполнителей. У него более пятидесяти лучших 40 хитов в британском
              чарте синглов и Billboard Hot 100, включая семь номеров в
              Великобритании и девять в США, а также семь последовательных
              альбомов номер один в США и ещё семь его альбомов занимали первые
              места в Billboard 200, 23 сингла входили в американский Топ-40, 16
              попадали в первую десятку и шесть поднимались на первое место. 52
              сингла Элтона Джона входили в британский Топ-40.Его сингл «Candle
              in the Wind 1997» (новая версия «Candle in the Wind» 1973 года),
              переписанный в честь Дианы, принцессы Уэльской, был продан тиражом
              более 33 миллионов копий по всему миру и является самым
              продаваемым синглом в истории чартов Великобритании и США. Он
              также продюсировал записи и иногда снимался в фильмах. С 1976 по
              1987 и с 1997 по 2002 Элтон Джон владел английским футбольном
              клубом «Уотфорд». Он является почётным пожизненным президентом
              клуба.
            </p>
            <p>
              Выросший в районе Пиннер в Лондоне, Элтон Джон научился играть на
              пианино в раннем возрасте, и к 1962 году создал Bluesology, R & B
              группу, в которой играл до 1967 года. Он встретил своего давнего
              музыкального партнера Берни Топина в 1967 году, после того как они
              оба ответили на объявление для авторов песен. В течение двух лет
              они писали песни для артистов, включая Лулу, а Джон работал
              сессионным музыкантом для артистов, включая Холлиз и Скаффолд. В
              1969 году был выпущен дебютный альбом Джона «Empty Sky». В 1970
              году его первый хитовый сингл «Your Song» со второго альбома
              «Elton John» вошел в десятку лучших в Великобритании и США. Элтон
              Джон также имел успех в музыкальных фильмах и театре, мультфильм
              1994 года «Король Лев» и его театральная адаптация, «Аида» и
              «Билли Эллиот (мюзикл)».
            </p>
            <p>
              Элтон Джон имеет пять премий «Грэмми», пять премий «Brit», две
              премии «Оскар», две премии «Золотой глобус», премию «Тони», премию
              «Легенды Диснея» и «Премию Кеннеди-центра». В 2004 году занял 49-е
              место в списке величайших исполнителей по версии журнала Rolling
              Stone. В 2013 году журнал Billboard назвал его самым успешным
              сольным артистом в списке лучших исполнителей всех времен
              Billboard Hot 100 и третьим в целом после Битлз и Мадонны. Он был
              введен в Зал славы рок-н-ролла в 1994 году и Зал славы авторов
              песен в 1992 году, а также является членом Британской академии
              композиторов и авторов. Он был посвящен в рыцари королевой
              Елизаветой II за «услуги музыке и благотворительные услуги» в 1998
              году. Элтон Джон выступал на нескольких королевских мероприятиях,
              таких как похороны принцессы Дианы в Вестминстерском аббатстве в
              1997 году, британский музыкальный концерт в честь Золотого юбилея
              Елизаветы II «Party at the Palace» в 2002 году и концерт в честь
              Бриллиантового юбилея королевы у Букингемского дворца в 2012 году.
            </p>
            <p>
              Элтон Джон известен также как общественный деятель, в частности,
              на поприще начатой им в конце 1980-х годов борьбы против эпидемии
              СПИДа. В 1992 году он основал Фонд Элтона Джона по борьбе со
              СПИДом, а год спустя он стал организатором ежегодной вечеринки
              Фонда СПИДа, которая стала одной из самых престижных
              Оскар-вечеринок в голливудской киноиндустрии. С момента своего
              основания фонд собрал более 300 миллионов фунтов стерлингов.В 1976
              году Элтон Джон объявил себя бисексуалом, а с 1988 года является
              открытым геем. 21 декабря 2005 года он вступил в гражданское
              партнерство с Дэвидом Фернишем; они поженились после того, как
              однополые браки стали законными в Англии и Уэльсе в 2014 году.
              Вручая Джону в 2019 году высшую гражданскую награду Франции —
              орден Почётного легиона, президент Франции Эмманюэль Макрон назвал
              его «мелодическим гением» и высоко оценил его борьбу за интересы
              ЛГБТ-сообщества. В 2018 году Элтон Джон отправился в трехлетний
              прощальный тур.
            </p>
          </Route>
          <Route path="/elvis">
            <img src="https://lh3.googleusercontent.com/proxy/E9l0tAVyb1ZsdmTOWrdj2ZBi9c0qsmrL9DN94ol_vuz_3_Tn1T8x68xlR0H594m0tyanIjQRkvmjnT-V8bRcNPZl" />
            <p>
              Э́лвис Аро́н Пре́сли (англ. Elvis Aaron Presley; 8 января 1935,
              Тьюпело — 16 августа 1977 года, Мемфис) — американский певец и
              актёр, один из самых коммерчески успешных исполнителей популярной
              музыки XX века. Также известен как «король рок-н-ролла» (или
              просто «король» — The King).
            </p>
            <p>
              Пресли популяризовал рок-н-ролл, хотя и не был первым исполнителем
              в этом жанре. Он соединил стили кантри и блюз, дав рождение новому
              стилю музыки — рокабилли, к которому относятся его первые записи
              на Sun Records в середине 1950-х годов. Вкрапляя в свой стиль
              элементы госпел и эстрады, Пресли вышел за рамки рокабилли и
              достиг мировой популярности (хиты «Heartbreak Hotel», «Don't Be
              Cruel», «Hound Dog» и другие). В 1956 году дебютировал в кино
              («Люби меня нежно»). В 1958—1960 годах проходил службу в ВС США;
              после возвращения из армии вновь стал записываться («It’s Now or
              Never», «Are You Lonesome Tonight?» и др. хиты), после чего
              сконцентрировался на кинокарьере, снявшись в общей сложности в 31
              фильме и записав два десятка саундтреков, большая часть которых
              оценивается крайне слабо.
            </p>
            <p>
              Переломным в карьере Пресли стал его первый телеконцерт (1968),
              обозначивший отход от устаревшего стиля музыкальных кинолент и
              вернувший страсть к выступлениям. Записи конца 1960-х — 1970-х
              годов отмечены влиянием кантри, соул и эстрады (хиты «In the
              Ghetto», «Suspicious Minds», «Always on My Mind» и др.). Элвис
              возвращается к концертной деятельности, которая становится
              доминирующей чертой его последующей карьеры (ежегодные ангажементы
              в Лас-Вегасе, гастроли по США). В 1973 году при помощи спутниковой
              связи проходит международная трансляция концерта «Aloha from
              Hawaii». Злоупотребление медикаментами привело к усилению
              депрессии и ухудшению здоровья, что стало причиной смерти Пресли в
              1977 году.
            </p>
            <p>
              Творчество Пресли неизменно продолжает пользоваться спросом; в
              целом, в мире продано более 1 млрд экземпляров пластинок (включая
              новейшие издания с ранее не издававшимися записями). Пресли —
              лауреат трёх премий «Грэмми» (1968, 1973, 1975), один из первых
              музыкантов, включённых в «Зал славы рок-н-ролла» (1986).
            </p>
          </Route>
        </Switch>
      </BrowserRouter>
      <p>
        Кириллова Е.Д.{" "}
        <a href="#" onclick="history.back();" class="nubex">
          к списку групп
        </a>
      </p>
    </div>
  );
}
