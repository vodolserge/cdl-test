const questions = [
    {
        id: 1,
        text: {
            en: 'You are driving on a straight, level highway at 50 mph. ' +
                'There are no vehicles in front of you. Suddenly a tire blew out of your vehicle, what should you do first?',
            ru: 'Вы движетесь по прямой ровной дороге со скоростью 50 миль в час (80 км/ч). ' +
                'Перед вами нет других транспортных средств. Вдруг одна из шин вашего транспортного средства лопнула. ' +
                'Что вы должны сделать в первую очередь?',
        },
        words: [

        ],
        options: {
            en: [
                'Begin emergency braking.',
                'Stay off the brake until the vehicle has slowed down.',
                'Begin light braking.'
            ],
            ru: [
                'Начать аварийное торможение.',
                'Не нажимать на тормоз до тех пор, пока транспортное средство не замедлится.',
                'Начать легкое торможение.'
            ],
        },
        correctAnswerIndex: 1,
        explanations: {
            en: [
                '',
                'Section: 2.17.4 - Tire Failure Stay Off the Brake. ' +
                'Its natural to want to brake in an emergency. However, braking when a tire has failed could ' +
                'cause loss of control. Unless you are about to run into something, stay off the brake until ' +
                'the vehicle has slowed down. Then brake very gently, pull off the road, and stop.',
                '',
            ],
            ru: [
                '',
                'Раздел: 2.17.4 - Поломка шины ' +
                'Не нажимайте на тормоз. Естественно хочется нажать на тормоз в экстренной ситуации. ' +
                'Однако торможение, когда шина лопнула, может вызвать потерю управления. Если вы не собираетесь ' +
                'столкнуться с чем-либо, не нажимайте на тормоз до тех пор, пока транспортное средство не замедлится. ' +
                'Затем очень осторожно нажмите на тормоз, отъезжайте с дороги и остановитесь.',
                '',
            ],
        },
    },

    {
        id: 2,
        text: {
            en: 'You are driving a truck with a manual transmission. What gear will you ' +
                'probably have to use to take a long, steep downhill grade?',
            ru: 'Вы управляете грузовиком с механической коробкой передач. Вам, вероятно, ' +
                'какую придется использовать передачу , чтобы спускаться по долгому, крутому склону?',
        },
        words: [
            '',
            '',
        ],
        options: {
            en: [
                'A lower gear than you would use to climb the hill.',
                'A higher gear than you would use to climb the hill.',
                'The same gear you would use to climb the hill.',
            ],
            ru: [
                'Более низкую передачу, чем вы использовали бы для подъема на холм.',
                'Более высокую передачу, чем вы использовали бы для подъема на холм.',
                'Ту же передачу, которую вы использовали бы для подъема на холм.',
            ],
        },
        correctAnswerIndex: 0,
        explanations: {
            en: [
                'Section: 2.3.1 Manual Transmissions - Before Starting Down a Hill. Downshift before ' +
                'starting down the hill. Make sure you are in a low enough gear, ' +
                'usually lower than the gear required to climb the same hill.',
                '',
                '',
            ],
            ru: [
                'Раздел: 2.3.1 Ручные коробки передач - Перед началом спуска по склону.Переключитесь на более ' +
                'низкую передачу перед началом спуска. Убедитесь, что вы находитесь в достаточно низкой передаче, ' +
                'обычно ниже передачи, которую вы использовали бы для подъема на тот же холм.',
                '',
                '',
            ],
        },
    },

    {
        id: 3,
        text: {
            en: 'You are checking your wheels and rims for a pre-trip inspection. Which of these statements is true ?',
            ru: 'Вы проверяете колеса и обода на предварительном техническом осмотре. Какое из следующих утверждений верно?',
        },
        words: [
            '',
            '',
        ],
        options: {
            en: [
                'A vehicle can be safely driven with one missing lug nut on a wheel.',
                'Mismatched lock rings can be used on the same vehicle.',
                'Rust around wheel nuts may mean that they are loose.'
            ],
            ru: [
                'Транспортным средство можно безопасно управлять с отсутствующей одной гайкой на колесе.',
                'Несоответствующие блокировочные кольца можно использовать на одном и том же транспортном средстве.',
                'Ржавчина вокруг гаек колеса может означать, что они недостаточно затянуты.'
            ],
        },
        correctAnswerIndex: 2,
        explanations: {
            en: [
                '',
                '',
                'Section: 2.1.3 - What to Look For.\n' +
                'Rust around wheel nuts may mean the nuts are loose. \n' +
                'After a tire has been changed, stop a short while later and re-check tightness of nuts.',
            ],
            ru: [
                '',
                '',
                'Раздел: 2.1.3 - На что обращать внимание.\n' +
                'Ржавчина вокруг гаек колеса может указывать на то, что гайки недостаточно затянуты. \n' +
                'После замены шины остановитесь через некоторое время и повторно проверьте затяжку гаек.',
            ],
        },
    },

    {
        id: 4,
        text: {
            en: 'You are checking your tires for a pre- trip inspection. Which of these statements is true?',
            ru: 'Вы проверяете шины в ходе предварительного технического осмотра. Какое из следующих утверждений верно?',
        },
        words: [
            '',
            '',
        ],
        options: {
            en: [
                'Radial and bias-ply tires can be used together on the same vehicle.',
                '2/32-inch tread depth is safe for front tires.',
                'Tires of mismatched sizes should not be used together in the same vehicle.'
            ],
            ru: [
                'Радиальные и Непрокладочные шины (также известные как диагональные) шины могут быть использованы вместе на одном и том же транспортном средстве.',
                'Глубина протектора 2/32 дюйма безопасна для передних шин.',
                'Шины разных размеров не должны использоваться вместе на одном транспортном средстве.',
            ],
        },
        correctAnswerIndex: 2,
        explanations: {
            en: [
                '',
                '',
                'Section: 2.1.3 - What to Look For.\n' +
                'Tire Problems: Mismatched sizes.',
            ],
            ru: [
                '',
                '',
                'Раздел: 2.1.3 - На что обращать внимание.\n' +
                'Проблемы с шинами: Несоответствующие размеры.',
            ],
        },
    },

    {
        "id": 5,
        "text": {
            "en": "If a straight vehicle (not trailer or articulation) goes into front-wheel skid, it will:",
            "ru": "Если прямо движущееся транспортное средство (не прицеп или сцепка) начинает скользить передними колесами, то оно:"
        },
        "words": [
            "straight vehicle - прямо движущееся транспортное средство",
            "trailer - прицеп", "articulation - сцепка",
            "front-wheel skid - скользить передними колесами",
            "goes into - начинает",
            "go straight ahead - пойдет прямо вперед",
            "turn - повернет",
            "steering wheel - руль",
            "slide sideways - пойдет боком в занос",
            "spin out - вращение"
        ],
        "options": {
            "en": [
                "Go straight ahead but will turn if you turn the steering wheel.",
                "Slide sideways and spin out.",
                "Go straight ahead even if the steering wheel is turned. "
            ],
            "ru": [
                "Пойдет прямо вперед, но повернет, если вы повернете руль.",
                "Пойдет боком в занос и вращение.",
                "Пойдет прямо вперед, даже если руль повернут. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.19.3 - Front-wheel Skids In a front-wheel skid, the front end tends " +
                "to go in a straight line regardless of how much you turn the steering wheel."
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.19.3 - Занос передних колес. При заносе передних колес передняя часть " +
                "будет двигаться по прямой линии независимо от того, насколько вы повернете руль."
            ]
        }
    },

    {
        "id": 6,
        "text": {
            "en": "If you need to leave the road in a traffic emergency, you should:",
            "ru": "Если вам нужно съехать с дороги в экстренной ситуации на дороге, вы должны:"
        },
        "words": [
            "leave the road - съехать с дороги", "traffic emergency - экстренной ситуации на дороге",
            "avoid - избегайте", "braking - торможения", "speed - скорость",
            "drop to - упадет до", "about - примерно",
            "shoulder - обочина", "most - большинство", "will not support - не поддерживает",
            "large vehicle - крупные транспортные средства",
            "try to get - попробуйте убрать",
            "wheels - колеса", "off the pavement - с асфальта",
            "Explanation - Объяснение", "Section - Раздел",
            "Driving Emergencies - Чрезвычайные ситуации при движении",
            "Leaving the Road - Покидание дороги",
            "Avoid Braking - Избегайте торможения",
            "very gently - очень осторожно",
            "skidding - занос",
            "loose surface - скользкая поверхность"
        ],
        "options": {
            "en": [
                "Avoid braking until your speed has dropped to about 20 mph. ",
                "Avoid shoulder because most will not support a large vehicle.",
                "Try to get all wheels off the pavement."
            ],
            "ru": [
                "Избегайте торможения, пока ваша скорость не упадет до примерно 20 миль в час. ",
                "Избегайте обочины, так как большинство из них не поддерживает крупные транспортные средства.",
                "Попробуйте убрать все колеса с асфальта."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.17 - Driving Emergencies, Leaving the Road. Avoid Braking. If possible, " +
                "avoid using the brakes until your speed has dropped to about 20 mph. Then brake very gently to avoid skidding on a loose surface.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17 - Чрезвычайные ситуации при движении, Покидание дороги. " +
                "Избегайте торможения. Если возможно, избегайте использования тормозов, пока ваша скорость " +
                "не упадет примерно до 20 миль в час. Затем очень осторожно тормозите, чтобы избежать заноса на скользкой поверхности.",
                "",
                "",
            ]
        }
    },

    {
        "id": 7,
        "text": {
            "en": "Which of these statements about certain types of cargo is true?",
            "ru": "Какое из этих утверждений относительно определенных видов груза верно?"
        },
        "words": [
            "certain types of cargo - определенных видов груза",
            "true - верно",
            "liquids - жидкости", "hauled - перевозке",
            "tank - резервуар", "loaded totally full - загружен полностью",
            "unstable load - нестабильная нагрузка",
            "hanging meat - висячее мясо",
            "livestock - скот",
            "extra caution - дополнительной осторожности",
            "curves - поворотах",
            "oversize load - груз больших размеров",
            "hauled - перевозить", "special permit - специальное разрешение",
            "roads - дороги"
        ],
        "options": {
            "en": [
                "When liquids are hauled, the tank should always be loaded totally full.",
                "Unstable load such as hanging meat or livestock can require extra caution on curves. ",
                "Oversize load can be hauled without special permit during times when the roads are not busy."
            ],
            "ru": [
                "При перевозке жидкостей резервуар всегда должен быть загружен полностью.",
                "Нестабильная нагрузка, такая как висячее мясо или скот, может потребовать дополнительной осторожности на поворотах. ",
                "Груз больших размеров может быть перевезен без специального разрешения во время не пиковой загруженности дорог."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 3.4.2 - Hanging Meat, 3.4.3 - Livestock Hanging meat in a " +
                "refrigerated truck can be a very unstable load with a high center of gravity. Particular " +
                "caution is needed on sharp curves such as off ramps and on ramps. Go slowly. Livestock " +
                "can move around in a trailer, causing unsafe handling. With less than a full load, use false " +
                "bulkheads to keep livestock bunched together. Even when bunched, special care is necessary because " +
                "livestock can lean on curves. This shifts the center of gravity and makes rollover more likely.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 3.4.2 - Висячее мясо, 3.4.3 - Скот " +
                "Висячее мясо в рефрижераторном грузовике может быть очень нестабильной нагрузкой с высоким " +
                "центром тяжести. Особая осторожность необходима на резких поворотах, таких как спуски и подъемы. " +
                "Двигайтесь медленно. Скот может перемещаться в прицепе, вызывая небезопасное управление. " +
                "При неполной нагрузке используйте ложные переборки, чтобы держать скот вместе. Даже при этом " +
                "необходима особая осторожность, так как скот может наклоняться на поворотах. Это изменяет центр " +
                "тяжести и повышает вероятность переворачивания.",
                "",
            ]
        }
    },

    {
        "id": 8,
        "text": {
            "en": "According to the driver's manual, why should you limit the use of your horn?",
            "ru": "Согласно руководству водителя, почему вы должны ограничивать использование звукового сигнала?"
        },
        "words": [
            "driver's manual - руководство водителя",
            "limit the use - ограничивать использование",
            "horn - звуковой сигнал",
            "always - всегда", "keep - держать",
            "firm grip - крепко ухватитесь", "steering wheel - руль", "both hands - обеими руками",
            "not a good way - не является хорошим способом",
            "let others know - дать знать другим",
            "startle - испугать", "other drivers - других водителей",
            "communicating your presence - сообщение о вашем присутствии",
            "crash - авария", "needed - по мере необходимости",
            "dangerous - опасным",
            "used unnecessarily - ненужном использовании"
        ],
        "options": {
            "en": [
                "You should always keep a firm grip on the steering wheel with both hands.",
                "The horn is not a good way to let others know you are there.",
                "It can startle other drivers. "
            ],
            "ru": [
                "Вам всегда следует крепко держать руль обеими руками.",
                "Звуковой сигнал не является хорошим способом дать знать другим, что вы находитесь здесь.",
                "Сигнал может испугать других водителей. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.5.2 - Communicating Your Presence " +
                "Your horn can let others know you are there. " +
                "It can help to avoid a crash. Use your horn when needed. However, it can startle others and could be dangerous when used unnecessarily."
            ],
            "ru": [
                "",
                "",
                "Объяснение: " +
                "Раздел: 2.5.2 - Сообщение о вашем присутствии " +
                "Сигнал клаксона может дать понять другим водителям, что вы находитесь здесь. " +
                "Он может помочь избежать аварии. Используйте клаксон по мере необходимости. " +
                "Однако он может испугать других водителей и может быть опасным при ненужном использовании."
            ]
        }
    },

    {
        "id": 9,
        "text": {
            "en": "You do not have a hazardous materials endorsement on your commercial driver's license. You are asked to deliver hazardous materials in a placarded vehicle. You should:",
            "ru": "У вас нет специального разрешения на перевозку опасных материалов в вашем коммерческом водительском удостоверении. Вас попросили доставить опасные материалы в транспортном средстве с табличками. Что вы должны сделать?"
        },
        "words": [
            "hazardous materials endorsement - специальное разрешение на перевозку опасных материалов",
            "commercial driver's license - коммерческое водительское удостоверение",
            "placarded vehicle - транспортное средство с табличками",
            "refuse - отказаться",
            "haul the load - перевезти груз",
            "nearest place - ближайшее место",
            "driver with a Hazmat endorsement - водитель с разрешением на опасные материалы",
            "file a report - подать отчет",
            "DOT - Department of Transportation",
            "trip - поездка",
            "lists of regulated products - списки регулируемых продуктов",
            "drive a vehicle - водите транспортное средство",
            "crime - преступление",
            "cited - оштрафовать",
            "not be allowed to drive - вам не разрешат водить",
            "truck - грузовик",
            "cost you time and money - обойдется вам временем и деньгами"
        ],
        "options": {
            "en": [
                "Refuse to haul the load. ",
                "Haul the load but only to the nearest place where a driver with a Hazmat endorsement can take over.",
                "Haul the load but file a report with the DOT after the trip."
            ],
            "ru": [
                "Отказаться перевозить груз. ",
                "Перевезти груз, но только до ближайшего места, где водитель с разрешением на опасные материалы может продолжить транспортировку.",
                "Перевезти груз, но подать отчет в DOT после поездки."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.23.3 - Lists of Regulated Products Never drive a vehicle needing placards unless you have the hazardous materials endorsement. To do so is a crime. When stopped, you will be cited and you will not be allowed to drive your truck further. It will cost you time and money.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.23.3 - Списки Регулируемые продукты Никогда не водите транспортное средство, требующее табличек, если у вас нет специального разрешения на транпортировку опасных грузов. Это преступление. При остановке вас оштрафуют, и вам не разрешат дальше водить грузовик. Это обойдется вам временем и деньгами.",
                "",
                "",
            ]
        }
    },

    {
        "id": 10,
        "text": {
            "en": "Which of these statements about staying alert to drive is true?",
            "ru": "Какое из следующих утверждений о поддержании бодрствования за рулем верно?"
        },
        "words": [
            "staying alert - поддержание бодрствования",
            "half-hour break - полуторачасовой перерыв",
            "coffee - кофе",
            "do more to - больше поможет",
            "keep you alert - поддерживать вас в бодрствующем состоянии",
            "half-hour nap - полуторачасовой сон",
            "must stop - должны остановиться",
            "take a nap - вздремнуть",
            "truck stop - парковка для грузовиков",
            "rest area - зона отдыха",
            "side of the road - обочина дороги",
            "sleep - сон",
            "overcome fatigue - преодолеть усталость",
            "driver factors - факторы водителя",
            "drowsy - сонливы",
            "safe cure - безопасное лекарство",
            "risk - рисковать",
            "lives of others - жизни других"
        ],
        "options": {
            "en": [
                "A half-hour break for coffee will do more to keep you alert than a half-hour nap.",
                "If you must stop to take a nap, it should be at a truck stop or other rest area and never on the side of the road.",
                "Sleep is the only thing that can overcome fatigue. "
            ],
            "ru": [
                "30 минутный перерыв на кофе больше поможет вам оставаться бодрыми, чем 30-ти минутный сон.",
                "Если вам нужно остановиться, чтобы вздремнуть, это должно быть на парковке для грузовиков или другой зоне отдыха, а никак не на обочине дороги.",
                "Сон - единственное, что поможет преодолеть усталость. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.11.2 - Driver Factors If you are drowsy, the only safe cure is to get off the road and get some sleep. If you do not, you risk your life and the lives of others.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.11.2 - Факторы водителя Если вы сонливы, единственное безопасное лекарство - съехать с дороги и немного поспать. Если вы этого не делаете, вы рискуете своей жизнью и жизнью других.",
            ]
        }
    },

    {
        "id": 11,
        "text": {
            "en": "Your vehicle has hydraulic brakes. While traveling on a level road, you press the brake pedal and find that it goes to the floor. Which of these statements is true?",
            "ru": "У вашего транспортного средства гидравлические тормоза. Во время движения по ровной дороге вы нажимаете на педаль тормоза и обнаруживаете, что она опускается до пола. Какое из следующих утверждений верно?"
        },
        "words": [
            "hydraulic brakes - гидравлические тормоза",
            "traveling - во время движения",
            "level road - ровная дорога",
            "press the brake pedal - нажимаете на педаль тормоза",
            "goes to the floor - опускается до пола",
            "statements - утверждения",
            "pumping the brake pedal - повторное нажатие на педаль тормоза",
            "pressure - давление",
            "stop the vehicle - остановить транспортное средство",
            "shifting into neutral - переключение на нейтральную передачу",
            "slow the vehicle - замедлить транспортное средство",
            "parking brake - стояночный тормоз",
            "not work - не будет работать",
            "same hydraulic system - та же гидравлическая система",
            "brake failure - неисправность тормозов"
        ],
        "options": {
            "en": [
                "Pumping the brake pedal may bring the pressure up so you can stop the vehicle. ",
                "Shifting into neutral will help to slow the vehicle.",
                "The parking brake will not work either because it is a part of the same hydraulic system."
            ],
            "ru": [
                "Повторное нажатие на педаль тормоза (прокачка) может увеличить давление и позволить остановить транспортное средство. ",
                "Переключение на нейтральную передачу поможет замедлить транспортное средство.",
                "Стояночный тормоз тоже не будет работать, так как он является частью той же гидравлической системы."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.17.3 - Brake Failure Pump the Brakes. Sometimes pumping the brake pedal will generate enough hydraulic pressure to stop the vehicle.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17.3 - Неисправность тормозов Нажимайте на тормоза. Иногда повторное нажатие на педаль тормоза может создать достаточное гидравлическое давление для остановки транспортного средства.",
                "",
                "",
            ]
        }
    },

    {
        "id": 12,
        "text": {
            "en": "You are driving a vehicle at 55 mph on dry pavement. About how much total stopping distance will you need to bring it to a stop?",
            "ru": "Вы управляете транспортным средством со скоростью 55 миль в час на сухом асфальте. Примерно какое общее расстояние для остановки вам потребуется?"
        },
        "words": [
            "driving a vehicle - управляете транспортным средством",
            "55 mph - 55 миль в час",
            "dry pavement - сухой асфальт",
            "total stopping distance - общее расстояние для остановки",
            "bring it to a stop - остановить",
            "football field - футбольное поле",
            "twice the length - в два раза больше",
            "figure - рисунок",
            "stopping distance - дистанция остановки"
        ],
        "options": {
            "en": [
                "The length of a football field. ",
                "Twice the length of the vehicle.",
                "Half the length of the football field."
            ],
            "ru": [
                "Длина футбольного поля. ",
                "В два раза больше транспортного средства.",
                "Половина длины футбольного поля."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.6.1 - Stopping Distance At 55 mph, your vehicle will travel a minimum of 419 feet. See figure 2.11",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6.1 - Дистанция остановки При скорости 55 миль в час ваше транспортное средство пройдет минимум 419 футов (127 метров). См. рисунок 2.11",
                "",
                "",
            ]
        }
    },

    {
        "id": 13,
        "text": {
            "en": "Which of these statements about cold weather driving is true?",
            "ru": "Какое из следующих утверждений о вождении в холодную погоду верно?"
        },
        "words": [
            "cold weather driving - вождение в холодную погоду",
            "engine cannot overheat - двигатель не может перегреться",
            "exhaust system leaks - утечки из выхлопной системы",
            "less dangerous - менее опасны",
            "windshield washer antifreeze - антифриз для омывателя ветрового стекла"
        ],
        "options": {
            "en": [
                "An engine cannot overheat when the weather is very cold.",
                "Exhaust system leaks are less dangerous in cold weather.",
                "Windshield washer antifreeze should be used. "
            ],
            "ru": [
                "Двигатель не может перегреться, когда погода очень холодная.",
                "Утечки из выхлопной системы менее опасны в холодную погоду.",
                "Для омывателя ветрового стекла следует использовать антифриз. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.13.1 - Vehicle Checks Make sure the cooling system is full and there is enough antifreeze in the system to protect against freezing.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.13.1 - Проверки транспортного средства Убедитесь, что система охлаждения заполнена, и в системе достаточно антифриза для защиты от замерзания.",
            ]
        }
    },

    {
        "id": 14,
        "text": {
            "en": "When driving at night, you should:",
            "ru": "Когда вы водите ночью, вы должны:"
        },
        "words": [
            "driving at night - вождение ночью",
            "left side of the road - левая сторона дороги",
            "vehicle is coming toward you - транспортное средство идет навстречу вам",
            "deem your lights - включить свет",
            "within 300 feet - в пределах 300 футов",
            "oncoming vehicle - встречное транспортное средство",
            "adjust your speed - регулировать скорость",
            "stopping distance - дистанция торможения",
            "sight distance - видимость"
        ],
        "options": {
            "en": [
                "Look to the left side of the road when a vehicle is coming toward you.",
                "Deem your lights within 300 feet of an oncoming vehicle.",
                "Adjust your speed to keep your stopping distance within your sight distance. "
            ],
            "ru": [
                "Смотреть на левую сторону дороги, когда к вам идет другое транспортное средство.",
                "Включить свет задолго до приближения к встречному транспортному средству.",
                "Регулировать свою скорость, чтобы дистанция торможения оставалась в пределах видимости. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.11.4 - Vehicle Factors At night your headlights will usually be the main source of light for you to see by and for others to see you. You can't see nearly as much with your headlights as you see in the daytime. With low beams you can see ahead about 250 feet and with high beams about 350-500 feet. You must adjust your speed to keep your stopping distance within your sight distance. This means going slowly enough to be able to stop within the range of your headlights. Otherwise, by the time you see a hazard, you will not have time to stop.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.11.4 - Факторы транспортного средства Ночью ваши фары обычно будут основным источником света для вашей видимости и для того, чтобы вас видели другие. Вы видите гораздо меньше с помощью ваших фар, чем видите в дневное время. С ближним светом вы можете видеть вперед на расстояние около 250 футов, а с дальним светом - примерно 350-500 футов. Вы должны регулировать свою скорость, чтобы дистанция торможения оставалась в пределах вашей видимости. Это означает - движение должно быть достаточно медленно, чтобы иметь возможность остановиться в пределах светового поля. В противном случае, к моменту, когда вы увидите опасность, у вас не будет времени остановиться.",
            ]
        }
    },

    {
        "id": 15,
        "text": {
            "en": "Which of these statements about downshifting is true?",
            "ru": "Какое из следующих утверждений о понижении передач верно?"
        },
        "words": [
            "downshifting - понижение передач",
            "double-clutching - двойное сцепление",
            "rpm's - обороты двигателя",
            "clutch - сцепление",
            "shift lever - рычаг переключения",
            "neutral - нейтраль",
            "hill - холм",
            "curve - поворот"
        ],
        "options": {
            "en": [
                "When double-clutching, you should let the rpm's decrease while the clutch is released, and the shift lever is in neutral.",
                "When you downshift for a hill, you should do so after you start down the hill.",
                "When you downshift for a curve, you should do so before you enter the curve. "
            ],
            "ru": [
                "При двойном сцеплении вы должны уменьшать обороты двигателя, пока сцепление освобождено, а рычаг переключения находится в нейтральном положении.",
                "Когда вы понижаете передачу для спуска с холма, вы должны сделать это после того, как начнете спускаться.",
                "Когда вы понижаете передачу перед поворотом, вы должны сделать это до входа в поворот. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.3.1 - Manual Transmissions Before entering a curve slow down to a safe speed, and downshift to the right gear before entering the curve. This lets you use some power through the curve to help the vehicle be more stable while turning. It also allows you to speed up as soon as you are out of the curve.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.3.1 - Ручные трансмиссии Перед входом в поворот замедлите до безопасной скорости и понизьте передачу до нужной передачи перед входом в поворот. Это позволит использовать некоторую мощность при прохождении поворота, чтобы обеспечить более стабильное управление транспортным средством во время поворота. Также это позволяет увеличить скорость сразу после выхода из поворота.",
            ]
        }
    },

    {
        "id": 16,
        "text": {
            "en": "For your safety, when setting out reflective triangles you should:",
            "ru": "В целях вашей безопасности, когда вы размещаете отражающие треугольники, вы должны:"
        },
        "words": [
            "reflective triangles - отражающие треугольники",
            "flashers - аварийные мигалки",
            "sight - поле зрения",
            "walk - идти",
            "spots - места",
            "hold - держать",
            "oncoming traffic - движущиеся навстречу транспортные средства",
            "drivers - водители",
            "communicating - сообщение",
            "presence - присутствие"
        ],
        "options": {
            "en": [
                "Turn on your flashers.",
                "Keep them out of sight while you walk to the spots where you set them out.",
                "Hold the triangles between yourself and oncoming traffic. "
            ],
            "ru": [
                "Включить аварийные мигалки.",
                "Держать их вне поля зрения, пока вы идете на места, где вы их размещаете.",
                "Держать треугольники между собой и движущимися вам навстречу транспортными средствами. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.5.2 - Communicating Your Presence When putting out the triangles, hold them between yourself and the oncoming traffic for your own safety. (So other drivers can see you.)",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.5.2 - Сообщение о вашем присутствии При размещении треугольников держите их между собой и движущимися вам навстречу транспортными средствами для вашей собственной безопасности (чтобы другие водители могли видеть вас).",
            ]
        }
    },

    {
        "id": 17,
        "text": {
            "en": "As the blood alcohol concentration (BAC) goes up, what happens?",
            "ru": "Когда концентрация алкоголя в крови (BAC) повышается, что происходит?"
        },
        "words": [
            "blood alcohol concentration (BAC) - концентрация алкоголя в крови",
            "effects - эффекты",
            "alcohol - алкоголь",
            "judgment - оценка",
            "self-control - самоконтроль",
            "drinker - пьющий человек",
            "clearly - более четко",
            "affecting - влияющий"
        ],
        "options": {
            "en": [
                "The effects of alcohol decrease.",
                "Judgment and self-control are affected. ",
                "The drinker more clearly sees how alcohol is affecting him/her."
            ],
            "ru": [
                "Эффекты алкоголя уменьшаются.",
                "Влияет на оценку и самоконтроль. ",
                "Пьющий человек более четко видит, как алкоголь влияет на него."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.22.1 - Alcohol and Driving Alcohol affects more and more of the brain as BAC builds up. The first part of the brain affected controls judgment and self-control. One of the bad things about this is it can keep drinkers from knowing they are getting drunk. And, of course, good judgment and self-control are absolutely necessary for safe driving.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.22.1 - Алкоголь и вождение Алкоголь влияет на все больше и больше частей мозга по мере увеличения BAC. Первая часть мозга, которая подвергается воздействию, контролирует оценку и самоконтроль. Одной из плохих сторон этого является то, что это может помешать пьющим понять, что они пьянеют. И, конечно же, хорошая оценка и самоконтроль абсолютно необходимы для безопасного вождения.",
                "",
            ]
        }
    },

    {
        "id": 18,
        "text": {
            "en": "Which of these is a good thing to remember about using mirrors?",
            "ru": "Что из перечисленного следует помнить о использовании зеркал?"
        },
        "words": [
            "good thing - хорошо помнить",
            "using mirrors - использование зеркал",
            "look at - смотреть на",
            "several seconds - несколько секунд",
            "convex mirrors - выпуклые зеркала",
            "larger - более крупные",
            "closer - близкие",
            "really are - есть на самом деле",
            "blind spots - слепые точки",
            "mirror - зеркало"
        ],
        "options": {
            "en": [
                "You should look at a mirror for several seconds at a time.",
                "Convex mirrors make things look larger and closer than they really are.",
                "There are blind spots that your mirror cannot show. "
            ],
            "ru": [
                "Вы должны смотреть на зеркало несколько секунд подряд.",
                "Выпуклые зеркала делают предметы кажущимися более крупными и близкими, чем они есть на самом деле.",
                "Существуют слепые точки, которые ваше зеркало не может показать. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.4.2 - Seeing to the Sides and Rear There are blind spots that your mirrors cannot show you. Check your mirrors regularly to know where other vehicles are around you, and to see if they move into your blind spots.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.4.2 - Наблюдение по сторонам и сзади Существуют слепые точки, которые ваши зеркала не могут вам показать. Регулярно проверяйте ваши зеркала, чтобы знать, где находятся другие транспортные средства вокруг вас, и чтобы видеть, если они попадают в ваши слепые точки.",
            ]
        }
    },

    {
        "id": 19,
        "text": {
            "en": "Hydroplaning:",
            "ru": "Гидропланирование:"
        },
        "words": [
            "Hydroplaning - гидропланирование",
            "occurs - возникает",
            "lot of water - много воды",
            "Cannot occur - Не может возникнуть",
            "driving through - проезде через",
            "puddle - лужа",
            "more likely - более вероятно",
            "tire pressure - давление в шинах",
            "low - низкое"
        ],
        "options": {
            "en": [
                "Only occurs when there is a lot of water.",
                "Cannot occur when driving through a puddle.",
                "Is more likely if tire pressure is low. "
            ],
            "ru": [
                "возникает только при большом количестве воды.",
                "Не может возникнуть при проезде через лужу.",
                "Более вероятно, если давление в шинах низкое. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.6.2 - Matching Speed to the Road Surface It does not take a lot of water to cause hydroplaning. Hydroplaning can occur at speeds as low as 30 mph if there is a lot of water. Hydroplaning is more likely if tire pressure is low, or the tread is worn. (The grooves in a tire carry away the water; if they aren't deep, they don't work well.)",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.6.2 - Соответствие скорости дорожному покрытию Для вызывания гидропланирования не требуется много воды. Гидропланирование может произойти при скоростях всего 30 миль в час, если есть много воды. Гидропланирование более вероятно при низком давлении в шинах или износе протектора. (Борозды на шинах отводят воду; если они не глубокие, они работают плохо.)",
            ]
        }
    },

    {
        "id": 20,
        "text": {
            "en": "If you are being tailgated, you should:",
            "ru": "Если вас за вами следуют слишком близко, вы должны:"
        },
        "words": [
            "tailgated - следуют слишком близко",
            "Flash your brake lights - Мигать тормозными огоньками.",
            "Signal the tailgater - Сигнализировать водителю, следующему слишком близко",
            "safe to pass - когда безопасно разрешено обогнать",
            "Increase your following distance - Увеличить дистанцию между вами и впереди идущим транспортным средством."
        ],
        "options": {
            "en": [
                "Flash your brake lights.",
                "Signal the tailgater when it is safe to pass you.",
                "Increase your following distance. "
            ],
            "ru": [
                "Мигать тормозными огоньками.",
                "Сигнализировать водителю, следующему слишком близко, когда безопасно разрешено обогнать вас.",
                "Увеличить дистанцию между вами и впереди идущим транспортным средством."
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.7.2 - Space Behind Increase your following distance: Opening up room in front of you will help you to avoid having to make sudden speed or direction changes. It also makes it easier for the tailgater to get around you.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.7.2 - Расстояние сзади Увеличивайте дистанцию до впереди идущего: Открывая пространство перед вами, вы избегаете необходимости внезапно менять скорость или направление. Это также облегчает обгон вас машиной, двигающейся позади.",
            ]
        }
    },

    {
        "id": 21,
        "text": {
            "en": "A key principle to remember about loading cargo is to keep the load:",
            "ru": "Ключевой принцип, который следует помнить при погрузке груза, заключается в том, чтобы удерживать груз:"
        },
        "words": [
            "loading cargo - погрузка груза",
            "rear - сзади",
            "front - спереди",
            "Balanced in the cargo area - Сбалансировано в грузовом отсеке."
        ],
        "options": {
            "en": [
                "To the rear.",
                "To the front.",
                "Balanced in the cargo area. "
            ],
            "ru": [
                "Сзади.",
                "Спереди.",
                "Сбалансировано в грузовом отсеке."
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 3.2.4 - Balance the Weight Poor weight balance can make vehicle handling unsafe. Too much weight on the steering axle can cause hard steering. It can damage the steering axle and tires. Under- loaded front axles (caused by shifting weight too far to the rear) can make the steering axle weight too light to steer safely. Too little weight on the driving axles can cause poor traction. The drive wheels may spin easily.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 3.2.4 - Балансировка веса Плохой баланс веса может сделать управление транспортным средством небезопасным. Слишком много веса на рулевой оси может вызвать тяжелое управление. Это может повредить рулевую ось и шины. Недозагруженные передние оси (вызванные перекладыванием веса слишком далеко назад) могут сделать вес на рулевой оси слишком легким для безопасного управления. Слишком мало веса на ведущих осях может вызвать плохое сцепление с дорогой. Задние колеса могут легко прокручиваться.",
            ]
        }
    },

    {
        "id": 22,
        "text": {
            "en": "How far should a driver look ahead of the vehicle while driving?",
            "ru": "Как далеко водитель должен смотреть вперед автомобиля во время движения?"
        },
        "words": [
            "look ahead - смотреть вперед",
            "18-21 seconds - 18-21 секунда",
            "12-15 seconds - 12-15 секунд. ",
            "5-8 seconds - 5-8 секунд."
        ],
        "options": {
            "en": [
                "18-21 seconds.",
                "12-15 seconds. ",
                "5-8 seconds."
            ],
            "ru": [
                "18-21 сек.",
                "12-15 секунд. ",
                "5-8 секунд."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.4.1 - Seeing Ahead Most good drivers look at least 12 to 15 seconds ahead. That means looking ahead the distance you will travel in 12 to 15 seconds. At lower speeds, thats about one block. At highway speeds its about a quarter of a mile. If you are not looking that far ahead, you may have to stop too quickly or make quick lane changes. Looking 12 to 15 seconds ahead does not mean not paying attention to things that are closer.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.4.1 - Осмотр вперед Большинство хороших водителей смотрят как минимум за 12-15 секунд вперед. Это означает смотреть вперед на расстояние, которое вы пройдете за 12-15 секунд. При более низких скоростях это примерно один квартал. При скоростях на автостраде это примерно четверть мили. Если вы не смотрите так далеко вперед, вам может понадобиться слишком быстро останавливаться или совершать быстрые перестроения. Смотреть вперед на 12-15 секунд не означает не обращать внимание на близкие объекты.",
                "",
            ]
        }
    },

    {
        "id": 23,
        "text": {
            "en": "How do you correct a drive-wheel acceleration skid?",
            "ru": "Как исправить занос ведущих колес при ускорении?"
        },
        "words": [
            "drive-wheel acceleration skid - занос ведущих колес при ускорении",
            "Apply more power to the wheels - Подайте больше мощности на колеса.",
            "Downshift - Понизить передачу.",
            "Stop accelerating.  - Перестать разгоняться."
        ],
        "options": {
            "en": [
                "Apply more power to the wheels.",
                "Downshift.",
                "Stop accelerating. "
            ],
            "ru": [
                "Подайте больше мощности на колеса.",
                "Понизить передачу.",
                "Перестать разгоняться. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.19.1 - Drive-wheel Skids By far the most common skid is one in which the rear wheels lose traction through excessive braking or acceleration. Skids caused by acceleration usually happen on ice or snow. Taking your foot off the accelerator can easily stop them.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.19.1 - Занос задних колес Самый распространенный вид заноса - это случай, когда задние колеса теряют сцепление из-за чрезмерного торможения или ускорения. Заносы, вызванные ускорением, обычно происходят на льду или снегу. Просто отпустив педаль акселератора, можно легко прекратить такие заносы.",
            ]
        }
    },

    {
        "id": 24,
        "text": {
            "en": "The purpose of the retarders is to:",
            "ru": "Замедлители предназначены для:"
        },
        "words": [
            "retarders - ретардеры",
            "Apply extra braking power to the non-drive axles. - Прикладывается дополнительное тормозное усилие к неведущим осям.",
            "Help slow the vehicle while driving and reduce brake wear.  - Помогают замедлять транспортное средство во время движения и снижайте износ тормозов.",
            "Help prevent skids. - Помогают предотвратить заносы."
        ],
        "options": {
            "en": [
                "Apply extra braking power to the non-drive axles.",
                "Help slow the vehicle while driving and reduce brake wear. ",
                "Help prevent skids."
            ],
            "ru": [
                "Прикладывается дополнительное тормозное усилие к неведущим осям.",
                "Помогают замедлять транспортное средство во время движения и снижайте износ тормозов. ",
                "Помогают предотвратить заносы."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.3.4 - Retarders Some vehicles have retarders. Retarders help slow a vehicle, reducing the need for using your brakes. They reduce brake wear and give you another way to slow down.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.3.4 - Ретардеры Некоторые транспортные средства имеют ретардеры. Ретардеры помогают замедлить транспортное средство, уменьшая необходимость использования тормозов. Они уменьшают износ тормозов и предоставляют вам еще один способ замедления.",
                "",
            ]
        }
    },

    {
        "id": 25,
        "text": {
            "en": "Controlled braking:",
            "ru": "Контролируемое торможение:"
        },
        "words": [
            "Involves locking the wheels for a short period of time. - Включает блокировку колес на короткий период времени.",
            "Can be used when you are turning sharply.",
            "Is used to keep a vehicle in a straight line when braking.  - Используется для удержания автомобиля на прямой линии при торможении."
        ],
        "options": {
            "en": [
                "Involves locking the wheels for a short period of time.",
                "Can be used when you are turning sharply.",
                "Is used to keep a vehicle in a straight line when braking. "
            ],
            "ru": [
                "Включает блокировку колес на короткий период времени.",
                "Может использоваться при резком повороте.",
                "Используется для удержания автомобиля на прямой линии при торможении. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.17.2 - Emergency Braking: How to Stop Quickly and Safely You should brake in a way that will keep your vehicle in a straight line and allow you to turn if it becomes necessary. You can use the controlled braking method or the stab braking method. With this method, you apply the brakes as hard as you can without locking the wheels. Keep steering wheel movements very small while doing this. If you need to make a larger steering adjustment or if the wheels lock, release the brakes. Re-apply the brakes as soon as you can.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.17.2 - Аварийное торможение: Как остановиться быстро и безопасно Вы должны тормозить так, чтобы ваше транспортное средство двигалось в прямой линии и позволяло вам повернуть, если это станет необходимым. Вы можете использовать метод контролируемого торможения или метод рывкового торможения. При этом методе вы применяете тормоза так сильно, как только можете, без блокировки колес. При этом движения рулевого колеса должны быть очень маленькими. Если вам нужно сделать более крутое рулевое регулирование или если колеса заблокировались, отпустите тормоза. Возобновите нажатие на тормоза, как только сможете.",
            ]
        }
    },

    {
        "id": 26,
        "text": {
            "en": "Which of these is a good thing to do when steering to avoid a crash?",
            "ru": "Какое из следующих действий правильное при управлении для избежания аварии?"
        },
        "words": [
            "Apply the brakes while turning.",
            "Steer with one hand so that you can turn the wheel more quickly.",
            "Don't turn any more than needed to clear what is in your way.  - Не поворачивайте больше, чем необходимо, чтобы пройти мимо того, что находится на вашем пути."
        ],
        "options": {
            "en": [
                "Apply the brakes while turning.",
                "Steer with one hand so that you can turn the wheel more quickly.",
                "Don't turn any more than needed to clear what is in your way. "
            ],
            "ru": [
                "Нажимайте на тормоза во время поворота.",
                "Управляйте одной рукой, чтобы быстрее поворачивать руль.",
                "Не поворачивайте больше, чем необходимо, чтобы пройти мимо того, что находится на вашем пути. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.17.1 - Steering to Avoid an Accident Do not turn any more than needed to clear whatever is in your way. The more sharply you turn, the greater the chances of a skid or rollover.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.17.1 - Поворот руля для избежания аварии Не поворачивайте больше, чем необходимо, чтобы объехать препятствия. Чем круче вы поворачиваете, тем выше шансы на занос или опрокидывание.",
            ]
        }
    },

    {
        "id": 27,
        "text": {
            "en": "You should stop driving:",
            "ru": "Вам следует прекратить вождение:"
        },
        "words": [
            "After 5 hours.",
            "After 9 hours.",
            "Whenever you become sleepy.  - Всякий раз, когда вы становитесь сонным."
        ],
        "options": {
            "en": [
                "After 5 hours.",
                "After 9 hours.",
                "Whenever you become sleepy. "
            ],
            "ru": [
                "После 5 часов.",
                "После 9 часов.",
                "Всякий раз, когда вы становитесь сонным. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.11.2 - Driver Factors When you are tired, tyring to push on is far more dangerous than most drivers think. It is a major cause of fatal accidents. If you notice any signs of fatigue, stop driving and go to sleep for the night or take a 15-20 minute nap.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.11.2 - Факторы водителя Когда вы устали, попытка продолжать движение гораздо более опасна, чем думают большинство водителей. Это главная причина смертельных аварий. Если вы замечаете признаки усталости, остановитесь и лягте спать на ночь или сделайте 15-20-минутный дневной сон.",
            ]
        }
    },

    {
        "id": 28,
        "text": {
            "en": "Which of these is NOT a good rule to follow when caring for injured persons at an accident scene?",
            "ru": "Какое из этих правил НЕ рекомендуется соблюдать при оказании помощи пострадавшим на месте происшествия?"
        },
        "words": [
            "If a qualified person is helping them, stay out of the way unless asked to assist.",
            "Move severely injured person if there is a danger due to fire or passing traffic.",
            "Keep injured persons cool.  - Держите пострадавших в холоде."
        ],
        "options": {
            "en": [
                "If a qualified person is helping them, stay out of the way unless asked to assist.",
                "Move severely injured person if there is a danger due to fire or passing traffic.",
                "Keep injured persons cool. "
            ],
            "ru": [
                "Если им помогает квалифицированный специалист, держитесь подальше, пока вас не попросят помочь.",
                "Переместите пострадавшего, если существует опасность из-за пожара или проезжающего транспорта.",
                "Держите пострадавших в холоде. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.20.3 - Care for the Injured List item: Keep the injured person warm.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.20.3 - Уход за пострадавшими Сохраните пострадавшему тепло.",
            ]
        }
    },

    {
        "id": 29,
        "text": {
            "en": "You should avoid driving through deep puddles or flowing water. But if you must, which of these steps can help to keep your brakes working?",
            "ru": "Вам следует избегать движения по глубоким лужам или проточной воде. Но если необходимо, какие из этих шагов помогут сохранить работоспособность ваших тормозов?"
        },
        "words": [
            "Applying hard pressure on both the brake pedal and accelerator after coming out of the water.",
            "Gently putting on the brakes while driving through the water.  - Аккуратно нажимать на тормоз во время езды по воде.",
            "Turning on your brake heater."
        ],
        "options": {
            "en": [
                "Applying hard pressure on both the brake pedal and accelerator after coming out of the water.",
                "Gently putting on the brakes while driving through the water. ",
                "Turning on your brake heater."
            ],
            "ru": [
                "Сильное нажатие на педаль тормоза и газа после выхода из воды.",
                "Аккуратно нажимать на тормоз во время езды по воде. ",
                "Включить обогреватель тормозов."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.13.2 - Driving on Slippery Surfaces Gently put on the brakes. This presses linings against brake drums or discs and keeps mud, silt, sand, and water from getting in.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.13.2 - Движение на скользких поверхностях Постепенно нажмите на тормоза. Это прижимает накладки к тормозным барабанам или дискам и предотвращает попадание грязи, ила, песка и воды.",
                "",
            ]
        }
    },

    {
        "id": 30,
        "text": {
            "en": "Which of these statements about drugs is true?",
            "ru": "Какое из этих утверждений о наркотиках правда?"
        },
        "words": [
            "Amphetamines can be used to help the driver stay alert.",
            "A driver can use any prescription drug while driving.",
            "Use of drugs can lead to an accident and/or arrest.  - Употребление наркотиков может привести к несчастному случаю и/или аресту."
        ],
        "options": {
            "en": [
                "Amphetamines can be used to help the driver stay alert.",
                "A driver can use any prescription drug while driving.",
                "Use of drugs can lead to an accident and/or arrest. "
            ],
            "ru": [
                "Амфетамины могут быть использованы, чтобы помочь водителю будь начеку.",
                "Водитель может употреблять любые лекарства, отпускаемые по рецепту, во время вождения.",
                "Употребление наркотиков может привести к несчастному случаю и/или аресту. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.22.2 - Other Drugs Use of drugs can lead to traffic accidents resulting in death, injury, and property damage. Furthermore, it can lead to arrest, fines, and jail sentences. It can also mean the end of a person's driving career.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.22.2 - Другие наркотики Использование наркотиков может привести к дорожным авариям с летальным исходом, травмами и повреждением имущества. Кроме того, это может привести к аресту, штрафам и тюремному заключению. Также это может означать конец карьеры вождения для человека.",
            ]
        }
    },

    {
        "id": 31,
        "text": {
            "en": "Which of these is a good thing to remember when crossing or entering traffic with a heavy vehicle?",
            "ru": "Что из перечисленного следует помнить при пересечении или въезде в полосу движения с тяжелым транспортным средством?"
        },
        "words": [
            "Heavy vehicles need larger gaps in traffic than cars.  - Тяжелым автомобилям нужно больше пространства в движении, чем автомобилям.",
            "Because heavy vehicles are easy to see, you can count on other drivers to move out of your way slow down for you.",
            "The best way to cross the traffic is to pull the vehicle partway across the road and block one lane while waiting for the other to clear."
        ],
        "options": {
            "en": [
                "Heavy vehicles need larger gaps in traffic than cars. ",
                "Because heavy vehicles are easy to see, you can count on other drivers to move out of your way slow down for you.",
                "The best way to cross the traffic is to pull the vehicle partway across the road and block one lane while waiting for the other to clear."
            ],
            "ru": [
                "Тяжелым автомобилям нужно больше пространства в движении, чем автомобилям. ",
                "Поскольку тяжелые автомобили легко заметить, вы можете рассчитывать на то, что другие водители уедут с вашего пути и притормозят для вас.",
                "Лучший способ пересечь полосу движения — выехать автомобилем наполовину поперек дороги и перекрыть одну полосу, ожидая, пока освободится другая."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.7.7 - Space Needed to Cross or Enter Traffic Because of slow acceleration and the space large vehicles require, you may need a much larger gap to enter traffic than you would in a car.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.7.7 - Необходимое пространство для пересечения или въезда в поток Из-за медленного разгона и большого пространства, которое требуется для крупных транспортных средств, вам может потребоваться намного больше промежутка для въезда в поток, чем это было бы на автомобиле.",
                "",
                "",
            ]
        }
    },

    {
        "id": 32,
        "text": {
            "en": "You are driving a heavy vehicle with a manual transmission. You have to stop the vehicle on the shoulder while driving on an uphill grade. Which of these is a good rule to follow when putting it back in motion up the grade?",
            "ru": "Вы управляете тяжелым транспортным средством с механической коробкой передач. Вам нужно остановить транспортное средство на обочине при движении в гору. Какое из следующих правил следует соблюдать, чтобы продолжить движение вверх по склону?"
        },
        "words": [
            "Use the parking brake to hold the vehicle until the clutch engages. ",
            "Let the vehicle roll backwards a few feet before you engage the clutch but turn the wheel so that the back moves away from the roadway.",
            "Keep the clutch slipping while slowly accelerating."
        ],
        "options": {
            "en": [
                "Use the parking brake to hold the vehicle until the clutch engages. ",
                "Let the vehicle roll backwards a few feet before you engage the clutch but turn the wheel so that the back moves away from the roadway.",
                "Keep the clutch slipping while slowly accelerating."
            ],
            "ru": [
                "Используйте стояночный тормоз, чтобы удерживать автомобиль до включения сцепления. ",
                "Прежде чем выжать сцепление, дайте автомобилю откатиться на несколько футов назад, но поверните руль так, чтобы задняя часть отошла от проезжей части.",
                "Держите сцепление в состоянии \"скольжение сцепления\" или \"пробуксовки сцепления\"  при этом медленно ускоряясь."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.2.1 - Accelerating Don't roll back when you start. You may hit someone behind you. If you have a manual transmission vehicle, partly engage the clutch before you take your right foot off the brake. Put on the parking brake whenever necessary to keep from rolling back.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.2.1 - Ускорение Не откатывайтесь назад, когда начинаете движение. Вы можете столкнуться с кем-то сзади. Если у вас есть транспортное средство с механической коробкой передач, частично включите сцепление, прежде чем уберете правую ногу с тормоза. Надевайте стояночный тормоз, когда это необходимо, чтобы избежать откатывания назад.",
                "",
                "",
            ]
        }
    },

    {
        "id": 33,
        "text": {
            "en": "You are driving a heavy vehicle. You must exit a highway using an off-ramp that curves downhill. You should:",
            "ru": "Вы едете на тяжелом транспортном средстве. Вы должны съехать с шоссе, используя съезд, который поворачивает вниз по склону. Вам следует:"
        },
        "words": [
            "Wait until you are in the curve before downshifting.",
            "Slow to the posted speed limit for the off-ramp.",
            "Slow down to a safe speed before the curve. "
        ],
        "options": {
            "en": [
                "Wait until you are in the curve before downshifting.",
                "Slow to the posted speed limit for the off-ramp.",
                "Slow down to a safe speed before the curve. "
            ],
            "ru": [
                "Дождитесь, пока вы окажетесь в повороте, прежде чем понижать передачу.",
                "Замедлитесь до указанного ограничения скорости для съезда с дороги.",
                "Замедлитесь до безопасной скорости перед поворотом."
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.8.2 - Hazardous Roads Freeway and turnpike exits can be particularly dangerous for commercial vehicles. Off ramps and on ramps often have speed limit signs posted. Remember, these speeds may be safe for automobiles, but may not be safe for larger vehicles or heavily loaded vehicles. Exits that go downhill and turn at the same time can be especially dangerous. The downgrade makes it difficult to reduce speed. Braking and turning at the same time can be a dangerous practice. Make sure you are going slowly enough before you get on the curved part of an off ramp or on ramp.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.8.2 - Опасные дороги Выезды с автомагистралей и платных дорог могут быть особенно опасными для грузовых транспортных средств. Часто на съездах и подъездах устанавливаются знаки ограничения скорости. Помните, что эти скорости могут быть безопасными для автомобилей, но могут быть небезопасными для крупных транспортных средств или транспортных средств с большой нагрузкой. Выезды, идущие вниз по склону и поворачивающие одновременно, могут быть особенно опасными. Нисхождение затрудняет снижение скорости. Торможение и поворот одновременно могут быть опасной практикой. Убедитесь, что вы движетесь достаточно медленно, прежде чем входить на изогнутую часть съезда или подъезда.",
            ]
        }
    },

    {
        "id": 34,
        "text": {
            "en": "You must park on a side of a level, straight, four-lane divided highway. Where should you place the reflective triangles?",
            "ru": "Вы должны припарковаться на обочине ровного, прямого, разделенного на четыре полосы шоссе. Где разместить светоотражающие треугольники?"
        },
        "words": [
            "One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 100 feet to the front of the vehicle.",
            "One within 10 feet of the front of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear.",
            "One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear. "
        ],
        "options": {
            "en": [
                "One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 100 feet to the front of the vehicle.",
                "One within 10 feet of the front of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear.",
                "One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear. "
            ],
            "ru": [
                "Один в пределах 10 футов от задней части транспортного средства, один примерно в 100 футах сзади и один примерно в 100 футах от передней части транспортного средства.",
                "Один в пределах 10 футов от передней части автомобиля, один примерно в 100 футах сзади и один примерно в 200 футах сзади.",
                "Один в пределах 10 футов от задней части автомобиля, один примерно в 100 футах сзади и один примерно в 200 футах сзади. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.5.2 - Communicating Your Presence If you must stop on or by a one-way or divided highway, place warning devices (i.e. flares, triangular reflectors, cones, etc.)10 feet, 100 feet, and 200 feet toward the approaching traffic.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.5.2 - Коммуникация вашего присутствия Если вам необходимо остановиться на однополосной или разделенной дороге, поместите предупреждающие устройства (например, сигнальные факелы, треугольные светоотражающие элементы, конусы и т. д.) на расстоянии 10 футов, 100 футов и 200 футов в направлении приближающегося трафика.",
            ]
        }
    },

    {
        "id": 35,
        "text": {
            "en": "You are driving on a two-lane road. An oncoming driver drifts into your lane and is headed straight for you. Which of these is most often the best action to take?",
            "ru": "Вы едете по двух полосной дороге. Встречный водитель выезжает на вашу полосу и едет прямо на вас. Какое из этих действий чаще всего лучше предпринять?"
        },
        "words": [
            "Steer to the right.",
            "Steer onto the left shoulder.",
            "Hard braking."
        ],
        "options": {
            "en": [
                "Steer to the right. ",
                "Steer onto the left shoulder.",
                "Hard braking."
            ],
            "ru": [
                "Поверните вправо. ",
                "Поверните на левое плечо дороги.",
                "Резкое торможение."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.17.1 - Steering to Avoid an Accident If an oncoming driver has drifted into your lane, a move to your right is best.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17.1 - Поворот руля для избежания аварии Если встречный водитель выехал на вашу полосу, лучше всего повернуть направо.",
                "",
                "",
            ]
        }
    },

    {
        "id": 36,
        "text": {
            "en": "Brake fade:",
            "ru": "Перестал работать тормоз:"
        },
        "options": {
            "en": [
                "Can be corrected by letting up on the brakes for 1-2 seconds and then reapplying them.",
                "Is a problem that only occurs with drum brakes.",
                "Can be caused by the brakes getting very hot. "
            ],
            "ru": [
                "Можно исправить, отпустив тормоза на 1-2 секунды и потом нажать их повторно.",
                "Проблема, которая возникает только с барабанными тормозами.",
                "Может быть вызвано тем, что тормоза сильно нагреваются. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.16.3 - Brake Fading or Failure\nBrakes are designed so brake shoes or pads rub against the brake drum or disks to slow the vehicle. Braking creates heat, but brakes are designed to take a lot of heat. However, brakes can fade or fail from excessive heat caused by using them too much and not relying on the engine braking effect.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.16.3 - Ослабление или выход из строя тормозов\nТормоза предназначены так, чтобы тормозные колодки или накладки тренировались о тормозной барабан или диски, чтобы замедлить движение транспортного средства. Торможение создает тепло, но тормоза разработаны так, чтобы выдерживать большое количество тепла. Однако тормоза могут ослабеть или выйти из строя из-за чрезмерного нагрева, вызванного чрезмерным использованием и нежеланием полагаться на эффект двигателя при торможении.",
            ]
        }
    },

    {
        "id": 37,
        "text": {
            "en": "Which of these statements about engine overheating is true?",
            "ru": "Какое из этих утверждений о перегреве двигателя верно?"
        },
        "options": {
            "en": [
                "You should never shut off an overheated engine until it cools.",
                "You should never remove the radiator cap on a pressurized system until the system is cooled. ",
                "Antifreeze is not needed when the weather is warm."
            ],
            "ru": [
                "Никогда не глушите перегретый двигатель, пока он не остынет.",
                "Ни в коем случае нельзя снимать крышку радиатора в системе под давлением до тех пор, пока система охлаждается. ",
                "Антифриз не нужен, когда погода теплая."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.14.1 - Vehicle Checks\nNever remove the radiator cap or any part of the pressurized system until the system has cooled. Steam and boiling water can spray under pressure and cause severe burns. If you can touch the radiator cap with your bare hand, it is probably cool enough to open.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.14.1 - Проверки транспортного средства\nНикогда не снимайте крышку радиатора или какую-либо часть системы под давлением, пока система не остынет. Пар и кипящая вода могут распыляться под давлением и вызвать серьезные ожоги. Если вы можете прикоснуться к крышке радиатора голой рукой, она, вероятно, достаточно остыла для открытия.",
                "",
            ]
        }
    },

    {
        "id": 38,
        "text": {
            "en": "Which of these statements about overhead clearance is true?",
            "ru": "Какое из этих утверждений о габарите по высоте верно?"
        },
        "options": {
            "en": [
                "The weight of a vehicle changes height. ",
                "You should assume posted clearance signs correct.",
                "If the road surface causes your vehicle to tilt toward objects at the edge of the road, you should drive close to the shoulder."
            ],
            "ru": [
                "Вес автомобиля меняет высоту. ",
                "Вы должны считать, что размещенные знаки габаритов по высоте верны.",
                "Если поверхность дороги заставляет ваше транспортное средство наклоняться к объектам у края дороги, вы должны двигаться близко к обочине."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.7.4 - Space Overhead\nThe weight of a cargo van changes its height. An empty van is higher than a loaded one. That you got under a bridge when you were loaded does not mean that you can do it when you are empty.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.7.4 - Свободное пространство сверху\nВес грузовой фургона меняет его высоту. Пустой фургон выше загруженного. Тот факт, что вы проехали под мостом, когда были загружены, не означает, что вы можете это сделать, когда вы пусты.",
                "",
                "",
            ]
        }
    },

    {
        "id": 39,
        "text": {
            "en": "Which of these statements about vehicle fire is true?",
            "ru": "Какое из следующих утверждений о пожаре в транспортном средстве верно?"
        },
        "options": {
            "en": [
                "If cargo in a van or box trailer catches on fire, you should open the cargo door as soon as possible.",
                "If your engine is on fire, you should open the hood as soon as you can.",
                "A burning tire should be cooled with water. "
            ],
            "ru": [
                "Если груз в фургоне или боковом прицепе загорается, следует как можно скорее открыть грузовую дверь.",
                "Если ваш двигатель горит, следует как можно скорее открыть капот.",
                "Горящую шину следует охлаждать водой. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.21.3 - Fire Fighting\nA burning tire must be cooled. Lots of water may be required.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.21.3 - Тушение пожара\nГорящую шину следует охлаждать. Может потребоваться много воды.",
            ]
        }
    },

    {
        "id": 40,
        "text": {
            "en": "You must drive on a slippery road. Which of these is a good thing to do in such a situation?",
            "ru": "Вы должны ехать на скользкой дороге. Какое из следующих действий является хорошим в такой ситуации?"
        },
        "options": {
            "en": [
                "Apply the brakes while on curves.",
                "Slow down gradually. ",
                "Use a smaller following distance."
            ],
            "ru": [
                "Прокладывать тормоза на поворотах.",
                "Постепенно замедляться. ",
                "Соблюдать меньшее следующее расстояние."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.6.2 - Matching Speed to the Road Surface\nSlippery Surfaces: It will take longer to stop, and it will be harder to turn without skidding, when the road is slippery. Wet roads can double stopping distance. You must drive slower to be able to stop in the same distance as on a dry road. Reduce speed by about one-third (e.g., slow from 55 to about 35 mph) on a wet road. On packed snow, reduce speed by a half, or more. If the surface is icy, reduce speed to a crawl and stop driving as soon as you can safely do so.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.6.2 - Согласование скорости с дорожной поверхностью\nСкользкая поверхность: Будет требоваться больше времени для остановки, и будет сложнее поворачивать без скольжения, когда дорога скользкая. Мокрые дороги могут удвоить расстояние торможения. Вы должны двигаться медленнее, чтобы иметь возможность остановиться на том же расстоянии, что и на сухой дороге. Сократите скорость примерно на треть (например, с 55 до около 35 миль в час) на мокрой дороге. На уплотненном снеге снизьте скорость вдвое или более. Если поверхность обледенела, уменьшьте скорость до ползучей и прекратите движение, как только это можно сделать безопасно.",
                "",
            ]
        }
    },

    {
        "id": 41,
        "text": {
            "en": "Which of these statements about acceleration is true?",
            "ru": "Какое из следующих утверждений о разгоне верно?"
        },
        "options": {
            "en": [
                "Rough acceleration can cause mechanical damage. ",
                "When traction is poor, more power should be applied to the accelerator.",
                "You should feel a jerking motion if you accelerate your vehicle properly."
            ],
            "ru": [
                "Резкий разгон может вызвать механические повреждения. ",
                "Когда сцепление плохое, следует приложить больше мощности к педали акселератора.",
                "Вы должны почувствовать рывок, если вы правильно разгоняете свое транспортное средство."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.2.1 - Accelerating\nSpeed up smoothly and gradually so the vehicle does not jerk. Rough acceleration can cause mechanical damage. When pulling a trailer, rough acceleration can damage the coupling.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.2.1 - Разгон\nУвеличивайте скорость плавно и постепенно, чтобы автомобиль не рывкался. Резкий разгон может вызвать механические повреждения. При буксировке прицепа резкий разгон может повредить соединение.",
                "",
                "",
            ]
        }
    },

    {
        "id": 42,
        "text": {
            "en": "Which of these statements about brakes is true?",
            "ru": "Какое из следующих утверждений о тормозах верно?"
        },
        "options": {
            "en": [
                "The heavier a vehicle or the faster it is moving, the more heat the brakes must absorb to stop it. ",
                "Brakes have more stopping power then they get very hot.",
                "Brake drums cool very quickly when the vehicle is moving very fast."
            ],
            "ru": [
                "Чем тяжелее транспортное средство или чем быстрее оно движется, тем больше тепла тормоза должны поглотить, чтобы остановиться. ",
                "Тормоза обладают большей силой торможения, когда они нагреваются.",
                "Тормозные барабаны быстро остывают, когда транспортное средство движется очень быстро."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.6.1 - Stopping Distance\nThe heavier the vehicle, the more work the brakes must do to stop it, and the more heat they absorb.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6.1 - Дистанция торможения\nЧем транспортное средство тяжелее, тем больше работы тормозам нужно выполнить, чтобы остановить его, и тем больше тепла они поглощают.",
                "",
                "",
            ]
        }
    },

    {
        "id": 43,
        "text": {
            "en": "When the roads are slippery, you should:",
            "ru": "Когда дороги скользкие, вы должны:"
        },
        "options": {
            "en": [
                "Make turns as gently as possible.",
                "Stop and test the traction while going uphill.",
                "Decrease the distance that you look ahead of your vehicle."
            ],
            "ru": [
                "Делать повороты максимально плавно.",
                "Остановиться и проверить сцепление, двигаясь в гору.",
                "Уменьшить расстояние, на которое вы смотрите впереди своего транспортного средства."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.13.2 - Driving on Slippery Surfaces\nMake turns as gently as possible. Don't brake any harder than necessary, and don't use the engine brake or speed retarder. (They can cause the driving wheels to skid on slippery surfaces.)",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.13.2 - Движение на скользких поверхностях\nДелайте повороты максимально плавно. Не тормозите сильнее, чем необходимо, и не используйте двигательный тормоз или ретардер скорости. (Они могут вызвать проскальзывание ведущих колес на скользких поверхностях.)",
                "",
                "",
            ]
        }
    },

    {
        "id": 44,
        "text": {
            "en": "You are checking your brakes and suspension system for a pre-trip inspection. Which of these statements is NOT true?",
            "ru": "Вы проверяете тормоза и подвеску вашего транспортного средства перед поездкой. Какое из следующих утверждений НЕ верно?"
        },
        "options": {
            "en": [
                "Cracked drum should be replaced.",
                "Brake shoes should have brake fluid on them. ",
                "One missing leaf in a leaf spring can be dangerous."
            ],
            "ru": [
                "Треснутый тормозной барабан следует заменить.",
                "Тормозные колодки должны иметь на них тормозную жидкость. ",
                "Отсутствие одного листа в листовой пружине может быть опасным."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.1.3 - What to Look For\nBad Brake Drums or Shoes: Shoes or pads with oil, grease, or brake fluid on them.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.1.3 - На что обращать внимание\nНеисправные тормозные барабаны или колодки: Колодки или накладки с маслом, смазкой или тормозной жидкостью на них.",
                "",
            ]
        }
    },

    {
        "id": 45,
        "text": {
            "en": "The driver's manual suggests several things to do when you pass a vehicle. Which of these is NOT one of them?",
            "ru": "Руководство водителя предлагает несколько действий при обгона другого транспортного средства. Какое из следующих действий НЕ входит в них?"
        },
        "options": {
            "en": [
                "Assume that another driver does not see you.",
                "At night, turn on your high beams before you start to pass and leave them on until you have completely passed the vehicle. ",
                "Lightly tap your horn."
            ],
            "ru": [
                "Предположить, что другой водитель вас не видит.",
                "Ночью включите дальний свет перед тем, как начать обгон, и оставьте его включенным, пока вы полностью не обгоните транспортное средство. ",
                "Нажмите легко на клаксон."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.5.2 - Communicating Your Presence\nWhenever you are about to pass a vehicle, pedestrian, or bicyclist, assume they don't see you. They could suddenly move in front of you. When it is legal, tap the horn lightly or, at night, flash your lights from low to high beam and back. And, drive carefully enough to avoid a crash even if they don't see or hear you.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.5.2 - Сообщение о вашем присутствии\nКогда вы собираетесь обгонять транспортное средство, пешехода или велосипедиста, предположите, что они вас не видят. Они могут внезапно пересечь ваш путь. Если это разрешено правилами, нажмите клаксон легко или ночью включите мигание света с ближнего на дальний и обратно. И двигайтесь настолько осторожно, чтобы избежать столкновения, даже если они вас не видят или не слышат.",
                "",
            ]
        }
    },

    {
        "id": 46,
        "text": {
            "en": "The distance that you should look ahead of your vehicle while driving amounts to about ___ miles at normal highway speed.",
            "ru": "Расстояние, на которое вы должны смотреть впереди своего транспортного средства во время движения, составляет около ___ миль при нормальной скорости движения на шоссе."
        },
        "options": {
            "en": [
                "1/8",
                "1/2",
                "1/4 "
            ],
            "ru": [
                "1/8",
                "1/2",
                "1/4 "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.4.1 - Seeing Ahead\nMost good drivers look at least 12 to 15 seconds ahead. That means looking ahead the distance you will travel in 12 to 15 seconds. At lower speeds, that's about one block. At highway speeds it's about a quarter of a mile.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.4.1 - Видимость впереди\nБольшинство хороших водителей смотрят вперед не менее чем за 12-15 секунд. Это означает, что вы смотрите вперед на расстояние, которое вы пройдете за 12-15 секунд. При низких скоростях это примерно один блок. При движении на шоссе это примерно четверть мили.",
            ]
        }
    },

    {
        "id": 47,
        "text": {
            "en": "You are starting your vehicle in motion from a stop. As you apply power to the drive wheels, they start to spin. You should:",
            "ru": "Вы начинаете движение с места на своем транспортном средстве. При подаче мощности на приводные колеса они начинают прокручиваться. Вы должны:"
        },
        "options": {
            "en": [
                "Take your foot off the accelerator. ",
                "Try a lower gear.",
                "Take your foot off the accelerator and apply the brakes."
            ],
            "ru": [
                "Снять ногу с акселератора. ",
                "Попробовать более низкую передачу.",
                "Снять ногу с акселератора и прокачать тормоза."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.2.1 - Accelerating\nSpeed up very gradually when traction is poor, as in rain or snow. If you use too much power, the drive wheels may spin. You could lose control. If the drive wheels begin to spin, take your foot off the accelerator.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.2.1 - Разгон\nПри движении в условиях плохой сцепления, например, на дожде или снегу, разгоняйтесь очень постепенно. Если вы используете слишком много мощности, приводные колеса могут начать прокручиваться. Вы можете потерять управление. Если приводные колеса начинают прокручиваться, снимите ногу с акселератора.",
                "",
                "",
            ]
        }
    },

    {
        "id": 48,
        "text": {
            "en": "Which of these is the most important thing to remember about emergency braking?",
            "ru": "Что из следующего является наиболее важным, что нужно помнить о экстренном торможении?"
        },
        "options": {
            "en": [
                "Never do it without downshifting first.",
                "If the wheels are skidding, you cannot control your vehicle. ",
                "Disconnecting the steering axle brakes will keep your vehicle in a straight-line during emergency braking."
            ],
            "ru": [
                "Никогда не делайте это без предварительного понижения передач.",
                "Если колеса скользят, вы не сможете контролировать свое транспортное средство. ",
                "Отключение тормозов на передней оси позволит вашему транспортному средству двигаться прямо при экстренном торможении."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.17.2 - Emergency Braking: How to Stop Quickly and Safely\nEmergency braking does not mean pushing down on the brake pedal as hard as you can. That will only keep the wheels locked up and cause a skid. If the wheels are skidding, you cannot control the vehicle.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.17.2 - Экстренное торможение: как быстро и безопасно остановиться\nЭкстренное торможение не означает сильно нажимать на педаль тормоза. Это только приведет к блокировке колес и вызовет занос. Если колеса скользят, вы не сможете контролировать транспортное средство.",
                "",
            ]
        }
    },

    {
        "id": 49,
        "text": {
            "en": "Which of these statements about tires and hot weather driving is true?",
            "ru": "Какое из следующих утверждений о шинах и езде в жаркую погоду верно?"
        },
        "options": {
            "en": [
                "The air pressure of a tire decreases as the temperature of the tire increases.",
                "If tires were too hot to touch, letting out five or ten pounds of pressure would cool them down.",
                "You should inspect your tires every two hours or every 100 miles when driving in very hot weather. "
            ],
            "ru": [
                "Давление воздуха в шине уменьшается с увеличением температуры шины.",
                "Если шины слишком горячие на ощупь, выпускание пяти или десяти фунтов давления поможет их охладить.",
                "Вы должны проверять ваши шины каждые два часа или каждые 100 миль при движении в очень жаркую погоду. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.14.1 - Vehicle Checks\nCheck the tire mounting and air pressure. Inspect the tires every two hours or every 100 miles when driving in very hot weather. Air pressure increases with temperature. Do not let air out or the pressure will be too low when the tires cool off. If a tire is too hot to touch, remain stopped until the tire cools off.\nOtherwise the tire may blow out or catch fire.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.14.1 - Проверка транспортного средства\nПроверьте установку шин и давление воздуха. Проверяйте шины каждые два часа или каждые 100 миль при движении в очень жаркую погоду. Давление воздуха увеличивается с температурой. Не выпускайте воздух или давление будет слишком низким, когда шины остынут. Если шина слишком горячая на ощупь, останьтесь на месте, пока шина не остынет. В противном случае шина может лопнуть или загореться.",
            ]
        }
    },

    {
        "id": 50,
        "text": {
            "en": "Your vehicle is in a traffic emergency and may collide with another vehicle if you do not take action. Which of these is a good rule to remember at such a time?",
            "ru": "Ваше транспортное средство находится в аварийной ситуации и может столкнуться с другим транспортным средством, если вы не примете меры. Какое из следующих правил полезно помнить в такой ситуации?"
        },
        "options": {
            "en": [
                "You can almost always turn to miss an obstacle more quickly than you can stop. ",
                "Stopping is always the safest action in a traffic emergency.",
                "Leaving the road is always riskier than hitting another vehicle."
            ],
            "ru": [
                "Вы почти всегда можете повернуть, чтобы избежать препятствия, быстрее, чем остановиться. ",
                "Остановка всегда является самым безопасным действием в аварийной ситуации на дороге.",
                "Покидание дороги всегда более рискованно, чем столкновение с другим транспортным средством."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.17.1 - Steering to Avoid an Accident\nStopping is not always the safest thing to do in an emergency. When you don't have enough room to stop, you may have to steer away from what's ahead. Remember, you can almost always turn to miss an obstacle more quickly than you can stop. (However, top- heavy vehicles and tractors with multiple trailers may flip over.)",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17.1 - Поворот руля для избежания аварии\nОстановка не всегда является самым безопасным действием в аварийной ситуации. Когда у вас нет достаточно места для остановки, вам, возможно, придется уклониться от того, что находится перед вами. Помните, что вы почти всегда можете повернуть, чтобы избежать препятствия, быстрее, чем остановиться. (Однако верхнетяжелые транспортные средства и тракторы с несколькими прицепами могут перевернуться.)",
                "",
                "",
            ]
        }
    },

    {
        "id": 51,
        "text": {
            "en": "In case of which fires can you use water to put it out?",
            "ru": "В каком случае пожаров вы можете использовать воду для тушения?"
        },
        "options": {
            "en": [
                "Tire fires. ",
                "Gasoline fires.",
                "Electrical fires."
            ],
            "ru": [
                "Пожары шин. ",
                "Пожары бензина.",
                "Электрические пожары."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.21.3 - Fire Fighting\nWater can be used on wood, paper, or cloth, but don't use water on an electrical fire (can cause shock) or a gasoline fire (it will spread the flames). A burning tire must be cooled.\nLots of water may be required.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.21.3 - Тушение пожара\nВоду можно использовать для тушения дерева, бумаги или ткани, но не используйте воду для тушения электрического пожара (это может вызвать удар током) или бензинового пожара (это распространит пламя). Горящую шину необходимо охладить.\nМожет потребоваться большое количество воды.",
                "",
                "",
            ]
        }
    },

    {
        "id": 52,
        "text": {
            "en": "To help you stay alert while driving, you should:",
            "ru": "Чтобы помочь вам оставаться бодрым за рулем, вы должны:"
        },
        "options": {
            "en": [
                "Schedule trips for hours that you are normally asleep.",
                "Take periodic breaks. ",
                "Take cold medicine if you have a cold."
            ],
            "ru": [
                "Запланировать поездки на часы, когда вы обычно спите.",
                "Проводить периодические перерывы. ",
                "Принимать холодное лекарство, если у вас простуда."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.11.2 - While You Are Driving\nTake periodic breaks, about every 100 miles or 2 hours during long trips.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.11.2 - Во время вождения\nПроводите периодические перерывы, примерно каждые 100 миль или 2 часа во время долгих поездок.",
                "",
            ]
        }
    },

    {
        "id": 53,
        "text": {
            "en": "To avoid a crash, you had to drive onto the right shoulder. You are now driving at 40 mph on the shoulder. How should you move back into the pavement?",
            "ru": "Чтобы избежать столкновения, вам пришлось выехать на правое обочину. Сейчас вы движетесь на обочине со скоростью 40 миль в час. Как вы должны вернуться на дорожное покрытие?"
        },
        "options": {
            "en": [
                "Steer sharply onto the pavement, then brake hard as you counter steer.",
                "If the shoulder is clear, stay on the right until your vehicle comes to a stop then move back into the pavement when it is safe. ",
                "Brake hard to slow the vehicle, then steer sharply onto the pavement."
            ],
            "ru": [
                "Резко повернуть на дорожное покрытие, затем сильно затормозить, контролируя направление.",
                "Если обочина свободна, оставайтесь справа до тех пор, пока ваше транспортное средство не остановится, а затем вернитесь на дорожное покрытие, когда это будет безопасно. ",
                "Резко затормозить для замедления транспортного средства, затем резко повернуть на дорожное покрытие."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.17.1 - Steering to Avoid an Accident\nIf the shoulder is clear, stay on it until your vehicle has come to a stop. Signal and check your mirrors before pulling back onto the road.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.17.1 - Поворот руля для избежания аварии\nЕсли обочина свободна, оставайтесь на ней, пока ваше транспортное средство не остановится. Подайте сигнал и проверьте зеркала перед тем, как вернуться на дорогу.",
                "",
            ]
        }
    },

    {
        "id": 54,
        "text": {
            "en": "Which of these statements about driving in areas with strong wind is true?",
            "ru": "Какое из следующих утверждений о вождении в районах с сильным ветром верно?"
        },
        "options": {
            "en": [
                "You should drive alongside other vehicles to help break up the wind.",
                "Winds are especially a problem when coming out of tunnels. ",
                "The lighter your vehicle, the less trouble you will have with the wind."
            ],
            "ru": [
                "Вы должны двигаться бок о бок с другими транспортными средствами, чтобы помочь разбить ветер.",
                "Ветры особенно проблематичны при выезде из туннелей. ",
                "Чем легче ваше транспортное средство, тем меньше проблем с ветром у вас будет."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.7.3 - Space to the Sides\nStrong winds make it difficult to stay in your lane. The problem is usually worse for lighter vehicles. This problem can be especially bad coming out of tunnels. Don't drive alongside others if you can avoid it.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.7.3 - Пространство по бокам\nСильные ветры затрудняют движение по полосе. Проблемы обычно возникают с легкими транспортными средствами. Эта проблема может быть особенно серьезной при выезде из туннелей. Не двигайтесь бок о бок с другими, если можете этого избежать.",
                "",
            ]
        }
    },

    {
        "id": 55,
        "text": {
            "en": "Which of these is a good thing to do when driving at night?",
            "ru": "Какое из следующих действий является хорошим при вождении ночью?"
        },
        "options": {
            "en": [
                "Keep your speed slow enough that you can stop within the range of your headlights. ",
                "Keep your instrument lights bright.",
                "Look directly at the oncoming headlights only briefly."
            ],
            "ru": [
                "Держите скорость настолько низкой, чтобы вы могли остановиться в пределах обзора ваших фар. ",
                "Держите яркие огоньки приборов.",
                "Смотрите прямо на встречные фары только на короткое время."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.11.4 - Vehicle Factors\nAt night your headlights will usually be the main source of light for you to see by and for others to see you. You can't see nearly as much with your headlights as you see in the daytime. With low beams you can see ahead about 250 feet and with high beams about 350 to 500 feet. You must adjust your speed to keep your stopping distance within your sight distance. This means going slowly enough to be able to stop within the range of your headlights. Otherwise, by the time you see a hazard, you will not have time to stop.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.11.4 - Факторы транспортного средства\nНочью ваши фары обычно будут основным источником света для того, чтобы видеть вас и чтобы вас видели другие. Вы не можете видеть столько же с фарами, как вы видите днем. С дальним светом вы можете видеть впереди примерно на 250 футов, и с дальним светом - примерно на 350-500 футов. Вы должны регулировать скорость, чтобы остановочное расстояние оставалось в пределах вашего обзорного расстояния. Это означает двигаться достаточно медленно, чтобы остановиться в пределах обзора ваших фар. В противном случае, к моменту, когда вы увидите опасность, у вас не будет времени остановиться.",
                "",
                "",
            ]
        }
    },

    {
        "id": 56,
        "text": {
            "en": "You are driving a 40-foot vehicle at 35 mph. The road is dry, and visibility is good. What is the least amount of space you should keep in front of your vehicle to be safe?",
            "ru": "Вы водите транспортное средство длиной 40 футов со скоростью 35 миль в час. Дорога сухая, и видимость хорошая. Какое минимальное расстояние перед вашим транспортным средством вы должны поддерживать для обеспечения безопасности?"
        },
        "options": {
            "en": [
                "5 seconds.",
                "4 seconds. ",
                "3 seconds."
            ],
            "ru": [
                "5 секунд.",
                "4 секунды. ",
                "3 секунды."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.7.1 - Space Ahead\nHow much space should you keep in front of you? One good rule says you need at least one second for each 10 feet of vehicle length at speeds below 40 mph. At greater speeds, you must add 1 second for safety. For example, if you are driving a 40-foot vehicle, you should leave 4 seconds between you and the vehicle ahead.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.7.1 - Пространство впереди\nКакое расстояние вы должны держать перед собой? Одно хорошее правило гласит, что вам нужно по крайней мере одну секунду на каждые 10 футов длины транспортного средства при скоростях ниже 40 миль в час. При более высоких скоростях вы должны добавить 1 секунду для безопасности. Например, если вы водите транспортное средство длиной 40 футов, вы должны оставить 4 секунды между вами и транспортным средством впереди.",
                "",
            ]
        }
    },

    {
        "id": 57,
        "text": {
            "en": "What is the proper way to hold a steering wheel?",
            "ru": "Как правильно держать рулевое колесо?"
        },
        "options": {
            "en": [
                "With both hands close together, near the bottom of the wheel.",
                "With both hands close together, near the top of the wheel.",
                "With both hands, on opposite sides of the wheel. "
            ],
            "ru": [
                "Обеими руками плотно близко друг к другу, у нижней части руля.",
                "Обеими руками плотно близко друг к другу, у верхней части руля.",
                "Обеими руками, на противоположных сторонах руля. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.2.2 - Steering\nHold the steering wheel firmly with both hands. Your hands should be on opposite sides of the wheel. If you hit a curb or a pothole (chuckhole), the wheel could pull away from your hands unless you have a firm hold.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.2.2 - Управление\nДержите рулевое колесо крепко обеими руками. Ваши руки должны находиться на противоположных сторонах руля. Если вы попадете на бордюр или яму (выбоину), руль может вырваться из рук, если у вас нет крепкого захвата.",
            ]
        }
    },

    {
        "id": 58,
        "text": {
            "en": "High beams should be:",
            "ru": "Дальний свет фар должен быть:"
        },
        "options": {
            "en": [
                "Dimmed at the time when you get within 100 feet of another vehicle.",
                "Turned on when an oncoming driver does not dim his/her lights.",
                "Used when it is safe and legal to do so. "
            ],
            "ru": [
                "Ослаблен, когда вы приближаетесь к другому транспортному средству на расстояние менее 100 футов.",
                "Включен, когда встречный водитель не переключает дальний свет.",
                "Используется, когда это безопасно и законно. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.11.5 - Night Driving Procedures\nSome drivers make the mistake of always using low beams. This seriously cuts down on their ability to see ahead. Use high beams when it is safe and legal to do so. Use them when you are not within 500 feet of an approaching vehicle. Also, don't let the inside of your cab get too bright. This makes it harder to see outside. Keep the interior light off, and adjust your instrument lights as low as you can to still be able to read the gauges.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.11.5 - Процедуры ночного вождения\nНекоторые водители допускают ошибку, всегда используя ближний свет. Это серьезно снижает их способность видеть вперед. Используйте дальний свет, когда это безопасно и законно. Используйте его, когда вы находитесь на расстоянии не менее 500 футов от приближающегося транспортного средства. Также не допускайте слишком яркого освещения внутри кабины. Это затрудняет видимость наружу. Выключите внутреннее освещение и установите яркость своих приборов как можно ниже, чтобы все равно видеть показания датчиков.",
            ]
        }
    },

    {
        "id": 59,
        "text": {
            "en": "You can see a marking on a vehicle ahead of you. The marking is a red triangle with an orange center. What does the marking mean?",
            "ru": "Вы видите маркировку на транспортном средстве впереди. Маркировка представляет собой красный треугольник с оранжевым центром. Что означает эта маркировка?"
        },
        "options": {
            "en": [
                "The vehicle is hauling hazardous materials.",
                "It may be a slow-moving vehicle. ",
                "It is being driven by a student driver."
            ],
            "ru": [
                "Транспортное средство перевозит опасные материалы.",
                "Это может быть медленно движущееся транспортное средство. ",
                "Его водит ученик-водитель."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.8.3 - Drivers Who Are Hazards\nSome vehicles, by their nature, are slow and seeing them is a hazard clue (mopeds, farm machinery, construction machinery, tractors, etc.). Some of these will have the slow moving vehicle symbol to warn you. This is a red triangle with an orange center. Watch for it.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.8.3 - Водители, представляющие опасность\nНекоторые транспортные средства по своей природе двигаются медленно, и видеть их - это сигнал опасности (мопеды, сельскохозяйственная техника, строительная техника, тракторы и т. д.). Некоторые из них будут иметь знак медленно движущегося транспортного средства для предупреждения вас. Это красный треугольник с оранжевым центром. Обратите на него внимание.",
                "",
            ]
        }
    },

    {
        "id": 60,
        "text": {
            "en": "Which of these is not part of the pre-trip inspection of the engine compartment?",
            "ru": "Какой из следующих пунктов не является частью предварительной проверки отсека двигателя?"
        },
        "options": {
            "en": [
                "Worn electrical wiring insulation.",
                "Valve clearance. ",
                "Engine oil level."
            ],
            "ru": [
                "Изношенная изоляция электрической проводки.",
                "Зазор клапанов. ",
                "Уровень масла в двигателе."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.1.5 - Seven-step Inspection Method\nSee: Step 2 Check Engine Compartment. Valve clearance is not on the checklist.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.1.5 - Метод проверки в семи шагов\nСм. Шаг 2: Проверка отсека двигателя. Зазор клапанов не указан в списке проверки.",
                "",
            ]
        }
    },

    {
        "id": 61,
        "text": {
            "en": "The road you are driving on becomes very slippery due to glare ice. Which of these is a good thing to do in such a situation?",
            "ru": "Дорога, по которой вы двигаетесь, становится очень скользкой из-за гололёда. Что из следующего является хорошим действием в такой ситуации?"
        },
        "options": {
            "en": [
                "Downshift to stop.",
                "Stop driving as soon as you can safely do so. ",
                "Keep varying your speed by accelerating and braking."
            ],
            "ru": [
                "Переключиться на более низкую передачу для остановки.",
                "Прекратите движение, как только сможете это сделать безопасно. ",
                "Поддерживайте разнообразную скорость, акселерируя и тормозя."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.6.2 - Matching Speed to the Road Surface\nSlippery Surfaces: It will take longer to stop, and it will be harder to turn without skidding, when the road is slippery. Wet roads can double stopping distance. You must drive slower to be able to stop in the same distance as on a dry road. Reduce speed by about one-third (e.g., slow from 55 to about 35 mph) on a wet road. On packed snow, reduce speed by a half, or more. If the surface is icy, reduce speed to a crawl and stop driving as soon as you can safely do so.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.6.2 - Согласование скорости с состоянием дорожного покрытия\nСкользкие поверхности: Торможение займет больше времени, и повороты будут сложнее без скольжения, когда дорога скользкая. Мокрые дороги могут удвоить длину тормозного пути. Вы должны двигаться медленнее, чтобы остановиться на том же расстоянии, что и на сухой дороге. Снизьте скорость примерно на треть (например, с 55 до около 35 миль в час) на мокрой дороге. На уплотненном снеге снизьте скорость на половину или даже больше. Если дорожное покрытие покрыто льдом, снизьте скорость до ползучей и прекратите движение, как только сможете это сделать безопасно.",
                "",
            ]
        }
    },

    {
        "id": 62,
        "text": {
            "en": "You are driving a vehicle that could be driven safely at 55 mph on an open road. But traffic is heavy and other vehicles drive at the speed of 35 mph, though the speed limit is 55 mph. The safest speed for your vehicle is more likely to be:",
            "ru": "Вы управляете транспортным средством, которое может безопасно двигаться со скоростью 55 миль в час на открытой дороге. Но движение плотное, и другие транспортные средства движутся со скоростью 35 миль в час, хотя предельная скорость составляет 55 миль в час. Самая безопасная скорость для вашего транспортного средства, скорее всего, будет:",
        },
        "options": {
            "en": [
                "55 mph",
                "35 mph ",
                "45 mph"
            ],
            "ru": [
                "55 миль в час",
                "35 миль в час ",
                "45 миль в час"
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.6.5 - Speed and Traffic Flow\nWhen you are driving in heavy traffic, the safest speed is the speed of other vehicles. Vehicles going the same direction at the same speed are not likely to run into one another.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.6.5 - Скорость и поток движения\nКогда вы движетесь в плотном потоке, самая безопасная скорость - это скорость других транспортных средств. Транспортные средства, движущиеся в том же направлении с одинаковой скоростью, не склонны сталкиваться друг с другом.",
                "",
            ]
        }
    },

    {
        "id": 63,
        "text": {
            "en": "What is countersteering?",
            "ru": "Что такое контрвращение рулевого колеса?",
        },
        "options": {
            "en": [
                "Turning the wheel back in the other direction after steering to avoid a traffic emergency. ",
                "Turning the steering wheel counterclockwise.",
                "Using the steering axle brakes to prevent oversteering."
            ],
            "ru": [
                "Поворот рулевого колеса в обратном направлении после маневрирования для избежания аварии. ",
                "Поворот рулевого колеса против часовой стрелки.",
                "Использование тормозов на передней оси для предотвращения переруливания."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.17.1 - Steering to Avoid an Accident\nBe prepared to \"countersteer,\" that is, to turn the wheel back in the other direction, once you've passed whatever was in your path. Unless you are prepared to countersteer, you won't be able to do it quickly enough. You should think of emergency steering and countersteering as two parts of one driving action.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17.1 - Steering to Avoid an Accident\nБудьте готовы к \"контрвращению\", то есть повороту рулевого колеса в обратном направлении, как только вы обогнали то, что было на вашем пути. Если вы не готовы к контрвращению, вы не сможете сделать это достаточно быстро. Вы должны думать об аварийном управлении и контрвращении как о двух частях одного действия по вождению.",
                "",
                "",
            ]
        }
    },

    {
        "id": 64,
        "text": {
            "en": "Which of these statements about backing a heavy vehicle is true?",
            "ru": "Какое из следующих утверждений о развороте задним ходом тяжелого транспортного средства верно?",
        },
        "options": {
            "en": [
                "Helpers should be out of the driver's sight and use only voice signals to communicate with the driver.",
                "You should avoid backing whenever you can. ",
                "It is safer to back toward the right side of the vehicle than toward the driver's side."
            ],
            "ru": [
                "Помощники должны быть вне поля зрения водителя и использовать только голосовые сигналы для связи с водителем.",
                "Вы должны избегать разворота транспортного средства задним ходом, когда это возможно. ",
                "Безопаснее разворачиваться в направлении правой стороны транспортного средства, чем в направлении стороны водителя."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.2.4 - Backing Safely\nBecause you cannot see everything behind your vehicle, backing is always dangerous. Avoid backing whenever you can.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.2.4 - Backing Safely\nПоскольку вы не можете видеть все, что находится за вашим транспортным средством, разворот задней части всегда опасен. Избегайте разворота задней части транспортного средства, когда это возможно.",
                "",
            ]
        }
    },

    {
        "id": 65,
        "text": {
            "en": "Which of these best describes how to use the brake pedal on a steep downhill grade?",
            "ru": "Какое из следующих наилучшим образом описывает, как использовать педаль тормоза на крутом спуске?",
        },
        "options": {
            "en": [
                "Repeated strong pressure then release.",
                "Release the brake when you are 5 MPH below your safe speed, then let your speed come back up to your safe speed and repeat again (bring speed down 5 MPH below your safe speed). ",
                "Light, pumping action."
            ],
            "ru": [
                "Повторное сильное нажатие, затем отпуск.",
                "Отпустите тормоз, когда вы находитесь на 5 миль в час ниже вашей безопасной скорости, затем дайте скорости вернуться обратно к безопасной скорости и повторите снова (снизьте скорость на 5 миль в час ниже вашей безопасной скорости). ",
                "Легкое, периодическое действие."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.16.4 - Proper Braking Technique\n1: Apply the brakes just hard enough to feel a definite slowdown. 2: When your speed has been reduced to approximately five mph below your safe speed, release the brakes. (This brake application should last for about three seconds.) When your speed has increased to your safe speed, repeat steps 1 and 2.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.16.4 - Proper Braking Technique\n1. Примените тормоза достаточно сильно, чтобы почувствовать определенное замедление. 2. Когда ваша скорость уменьшится примерно на пять миль в час ниже вашей безопасной скорости, отпустите тормоза. (Это нажатие на тормоза должно длиться около трех секунд.) Когда ваша скорость увеличится до безопасной скорости, повторите шаги 1 и 2.",
                "",
            ]
        }
    },

    {
        "id": 66,
        "text": {
            "en": "Which of these statements about using turn signals is true?",
            "ru": "Какое из следующих утверждений о использовании указателей поворота верно?",
        },
        "options": {
            "en": [
                "You do not need to use your turn signal when changing lanes in traffic on a four-lane highway.",
                "You should use your turn signal to mark your vehicle when it is pulled off on the side of the road.",
                "When turning, you should signal early. "
            ],
            "ru": [
                "Вам не нужно использовать указатель поворота при перестроении в другой ряд движения на четырехполосной дороге.",
                "Вы должны использовать указатель поворота, чтобы обозначить ваше транспортное средство, когда оно стоит на обочине дороги.",
                "При повороте вы должны сигнализировать заранее. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.5.1 - Signal Your Intentions\nSignal early. Signal well before you turn. It is the best way to keep others from trying to pass you.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.5.1 - Signal Your Intentions\nСигнализируйте заранее. Сигнализируйте задолго до вашего поворота. Это лучший способ убедиться, что другие не будут пытаться вас обогнать.",
            ]
        }
    },

    {
        "id": 67,
        "text": {
            "en": "Which of these statements about double clutching and shifting is true?",
            "ru": "Какое из следующих утверждений о двойном сцеплении и переключении передач верно?",
        },
        "options": {
            "en": [
                "You can use the tachometer to tell you when to shift. ",
                "Double clutching should only be used with a heavy load.",
                "Double clutching should not be used when the road is slippery."
            ],
            "ru": [
                "Вы можете использовать тахометр, чтобы определить, когда переключать передачи. ",
                "Двойное сцепление следует использовать только при тяжелой нагрузке.",
                "Двойное сцепление не следует использовать при скользкой дороге."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.3.1 - Manual Transmissions\nWatch your tachometer, and shift up when your engine reaches the top of the range. Downshifting, like upshifting, requires knowing when to shift. Use either the\ntachometer or the speedometer and\ndownshift at the right rpm or road speed.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.3.1 - Manual Transmissions\nСледите за тахометром и переключайте передачи вверх, когда обороты двигателя достигнут верхнего предела. Для понижения передач, как и для повышения, важно знать, когда переключать. Используйте для этого либо тахометр, либо спидометр, и переключайте передачи при правильных оборотах двигателя или скорости движения.",
                "",
                "",
            ]
        }
    },

    {
        "id": 68,
        "text": {
            "en": "Which of these statements about speed management is true?",
            "ru": "Какое из следующих утверждений о управлении скоростью верно?",
        },
        "options": {
            "en": [
                "Empty trucks always stop in a shorter distance than fully loaded.",
                "You should choose a speed that lets you stop within the distance that you can see ahead. ",
                "When you double your speed, it will take twice the distance to stop."
            ],
            "ru": [
                "Пустые грузовики всегда останавливаются на более коротком расстоянии, чем полностью загруженные.",
                "Вы должны выбирать скорость, которая позволяет вам остановиться на расстоянии, которое вы можете видеть впереди. ",
                "Когда вы удваиваете свою скорость, понадобится вдвое большее расстояние для остановки."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.6.4 - Speed and Distance Ahead\nYou should always be able to stop within the distance you can see ahead. Fog, rain, or other conditions may require that you slow down to be able to stop in the distance you can see. At night, you can't see as far with low beams as you can with high beams. When you must use low beams, slow down.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.6.4 - Speed and Distance Ahead\nВы всегда должны быть в состоянии остановиться на расстоянии, которое вы видите впереди. Туман, дождь или другие условия могут потребовать от вас снижения скорости, чтобы остановиться на видимом расстоянии. Ночью вы не видите так далеко с ближним светом, как с дальним. Когда вы должны использовать ближний свет, снизьте скорость.",
                "",
            ]
        }
    },

    {
        "id": 69,
        "text": {
            "en": "Retarders:",
            "ru": "Ретардеры:",
        },
        "options": {
            "en": [
                "Can cause the driver wheels to skid when they have poor traction. ",
                "Work when you apply the brake pedal.",
                "Cause extra brake wear."
            ],
            "ru": [
                "Могут вызвать скольжение ведущих колес, когда они имеют плохое сцепление. ",
                "Работают, когда вы нажимаете педаль тормоза.",
                "Приводят к дополнительному износу тормозов."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.3.4 - Retarders\nWhen your drive wheels have poor traction, the retarder may cause them to skid. Therefore, you should turn the retarder off whenever the road is wet, icy, or snow covered.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.3.4 - Retarders\nКогда ваши ведущие колеса имеют плохое сцепление, ретардер может вызвать их скольжение. Поэтому вы должны выключать ретардер в тех случаях, когда дорога мокрая, обледенелая или покрыта снегом.",
                "",
                "",
            ]
        }
    },

    {
        "id": 70,
        "text": {
            "en": "To correct a drive wheel braking skid, you should:",
            "ru": "Для исправления заноса ведущих колес при торможении, вы должны:",
        },
        "options": {
            "en": [
                "Increase braking.",
                "Stop braking, turn quickly, then counter steer. ",
                "Increase braking, turn quickly, and counter steer."
            ],
            "ru": [
                "Усилить торможение.",
                "Прекратите торможение, быстро поверните, а затем контрреагируйте на руле. ",
                "Усилить торможение, быстро повернуть и контрреагировать на руле."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.19.2 - Correcting a Drive- wheel Braking Skid\nStop Braking: This will let the rear wheels roll again, and keep the rear wheels from sliding. Counter-steer: As a vehicle turns back on course, it has a tendency to keep on turning. Unless you turn the steering wheel quickly the other way, you may find yourself skidding in the opposite direction.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.19.2 - Correcting a Drive- wheel Braking Skid\nПрекратите торможение: Это позволит задним колесам снова крутиться и помешает задним колесам скользить. Контрреагирование на руле: При возвращении автомобиля на курс у него есть тенденция продолжать поворачивать. Если вы не быстро повернете руль в другую сторону, вы можете обнаружить, что скользите в противоположном направлении.",
                "",
            ]
        }
    },

    {
        "id": 71,
        "text": {
            "en": "When exiting or entering on a curved freeway ramp, you should:",
            "ru": "При выезде или въезде на изогнутый рамп на автостраде вы должны:",
            "fr": ""
        },
        "options": {
            "en": [
                "Slow down to at least 50% of the posted speed limit.",
                "Maintain the posted speed limit.",
                "Maintain a speed 5-10 mph under the posted speed limit. "
            ],
            "ru": [
                "Замедлиться до как минимум 50% от установленного ограничения скорости.",
                "Соблюдать установленное ограничение скорости.",
                "Поддерживать скорость на 5-10 миль в час ниже установленного ограничения скорости. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.6.3 - Speed and Curves\nDrivers must adjust their speed for curves in the road. If you take a curve too fast, two things can happen. The tires can lose their traction and continue straight ahead, so you skid off the road. Or, the tires may keep their traction and the vehicle rolls over. Tests have shown that trucks with a high center of gravity can roll over at the posted speed limit for a curve. Slow to a safe speed before you enter a curve. Braking in a curve is dangerous because it is easier to lock the wheels and cause a skid. Slow down as needed. Don't ever exceed the posted speed limit for the curve. Be in a gear that will let you accelerate slightly in the curve. This will help you keep control.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.6.3 - Speed and Curves\nВодители должны корректировать свою скорость для поворотов на дороге. Если вы взяли поворот слишком быстро, могут произойти две вещи. Шины могут потерять сцепление и продолжить движение прямо, так что вы уйдете с дороги. Или шины могут сохранить сцепление, и транспортное средство перевернется. Исследования показали, что грузовики с высоким центром тяжести могут перевернуться при установленном предельном ограничении скорости для поворота. Замедлите до безопасной скорости перед входом в поворот. Торможение в повороте опасно, потому что легче заблокировать колеса и вызвать занос. Замедляйтесь по мере необходимости. Никогда не превышайте установленное предельное ограничение скорости для поворота. Будьте на передаче, которая позволит вам слегка ускориться в повороте. Это поможет вам сохранить контроль.",
            ]
        }
    },

    {
        "id": 72,
        "text": {
            "en": "Which of the following vehicles will have the longest stopping distance?",
            "ru": "Какое из следующих транспортных средств будет иметь самое длинное расстояние торможения?",
            "fr": ""
        },
        "options": {
            "en": [
                "Bobtail tractor.",
                "Empty truck. ",
                "Loaded truck."
            ],
            "ru": [
                "Тягач без полуприцепа (бобтейл).",
                "Пустой грузовик. ",
                "Загруженный грузовик."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.6.1 - Stopping Distance\nThe heavier the vehicle, the more work the brakes must do to stop it, and the more heat they absorb. But the brakes, tires, springs, and shock absorbers on heavy vehicles are designed to work best when the vehicle is fully loaded. Empty trucks require greater stopping distances because an empty vehicle has less traction.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.6.1 - Stopping Distance\nЧем тяжелее транспортное средство, тем больше работы должны проделать тормоза, чтобы остановить его, и тем больше тепла они поглощают. Но тормоза, шины, рессоры и амортизаторы на тяжелых транспортных средствах спроектированы для наилучшей работы при полной загрузке транспортного средства. Пустые грузовики требуют больших расстояний торможения, потому что пустое транспортное средство имеет меньше сцепления с дорогой.",
                "",
            ]
        }
    },

    {
        "id": 73,
        "text": {
            "en": "How many red reflective triangles are you required to carry?",
            "ru": "Сколько красных отражающих треугольников вы обязаны иметь?",
            "fr": ""
        },
        "options": {
            "en": [
                "2",
                "3 ",
                "4"
            ],
            "ru": [
                "2",
                "3 ",
                "4"
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.1.5 - Seven-step Inspection Method\nStep 3 - Check Emergency Equipment: Three red reflective triangles.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.1.5 - Seven-step Inspection Method\nШаг 3 - Проверка аварийного оборудования: Три красных отражающих треугольника.",
                "",
            ]
        }
    },

    {
        "id": 74,
        "text": {
            "en": "You are required to inspect your truck within how many miles after beginning the trip?",
            "ru": "Вы обязаны проверить свой грузовик в течение скольки миль после начала поездки?",
            "fr": ""
        },
        "options": {
            "en": [
                "150",
                "100",
                "50 "
            ],
            "ru": [
                "150",
                "100",
                "50 "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.1.6 - Inspection During a Trip\nDrivers of trucks and truck tractors when transporting cargo must inspect the securement of the cargo within the first 50 miles of a trip and every 150 miles or every three hours (whichever comes first) after.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.6 - Inspection During a Trip\nВодители грузовиков и грузовых тягачей при перевозке груза должны проверить крепление груза в первые 50 миль поездки и каждые 150 миль или каждые три часа (в зависимости от того, что наступит раньше).",
            ]
        }
    },

    {
        "id": 75,
        "text": {
            "en": "There are two types of jackknife, they are:",
            "ru": "Существует два типа разворота полуприцепа, они:",
            "fr": ""
        },
        "options": {
            "en": [
                "Both trailer and tractor. ",
                "Tractor.",
                "Trailer."
            ],
            "ru": [
                "И полуприцеп, и тягач. ",
                "Только тягач.",
                "Только полуприцеп."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.18.5 - ABS on the Tractor Only, 2.19.1 - Drive-wheel Skids\nWhen only the trailer has ABS, the trailer is less likely to swing out, but if you lose\nsteering control or start a tractor jackknife, let up on the brakes (if you can safely do so) until you regain control. With vehicles towing\ntrailers, a drive-wheel skid can let the trailer\npush the towing vehicle sideways, causing a sudden jackknife.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.18.5 - ABS on the Tractor Only, 2.19.1 - Drive-wheel Skids\nЕсли только у полуприцепа есть ABS, то полуприцеп менее вероятно будет разворачиваться, но если вы потеряете\nуправление управлением или начнете разворачиваться полуприцепом, отпустите тормоза (если вы можете это сделать безопасно), пока не восстановите контроль. При перевозке\nполуприцепов скольжение ведущих колес может позволить полуприцепу\nоттолкнуть буксирующее транспортное средство вбок, вызвав внезапный разворот.",
                "",
                "",
            ]
        }
    },

    {
        "id": 76,
        "text": {
            "en": "The BAC (Blood Alcohol Concentration) for commercial drivers to be considered intoxicated when driving a commercial vehicle is:",
            "ru": "Уровень алкоголя в крови (BAC), при котором коммерческих водителей считают пьяными во время управления коммерческим транспортным средством:",
            "fr": ""
        },
        "options": {
            "en": [
                "0.10",
                "0.04 ",
                "0.01"
            ],
            "ru": [
                "0.10",
                "0.04 ",
                "0.01"
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.22.1 - Alcohol and Driving\nIt is illegal to drive a commercial motor vehicle with a blood alcohol concentration (BAC) that is 0.04 percent or greater and doing so will result in an immediate\nadministrative driver licensing sanction.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.22.1 - Alcohol and Driving\nВождение коммерческого транспортного средства с концентрацией алкоголя в крови (BAC) 0,04 процента или выше является незаконным, и это приведет к немедленным\nадминистративным мерам по лицензированию водителей.",
                "",
            ]
        }
    },

    {
        "id": 77,
        "text": {
            "en": "Where should the ignition key be during the pre-trip inspection?",
            "ru": "Где должен быть ключ зажигания во время предварительной проверки транспортного средства?",
        },
        "options": {
            "en": [
                "In your pocket. ",
                "On the driver's seat.",
                "In the ignition."
            ],
            "ru": [
                "В вашем кармане. ",
                "На сиденье водителя.",
                "В зажигании."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.1.5 - Seven-step Inspection Method\nStep 4: Make sure the parking brake is set,\nturn off the engine, and take the key with you.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.1.5 - Seven-step Inspection Method\nШаг 4: Убедитесь, что стояночный тормоз активирован, выключите двигатель и возьмите ключ с собой.",
                "",
                "",
            ]
        }
    },

    {
        "id": 78,
        "text": {
            "en": "When loading a trailer, if the cargo is loaded all to the rear, it may result in:",
            "ru": "При загрузке полуприцепа, если груз загружен полностью назад, это может привести к:",
        },
        "options": {
            "en": [
                "Damage to steering axle.",
                "Wheel lockup.",
                "Poor traction on drive wheels. "
            ],
            "ru": [
                "Повреждению рулевой оси.",
                "Блокировке колес.",
                "Плохой сцепке задних колес с дорогой. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 3.2.4 - Balance the Weight\nPoor weight balance can make vehicle handling unsafe. Too much weight on the steering axle can cause hard steering. It can damage the steering axle and tires. Under- loaded front axles (caused by shifting weight too far to the rear) can make the steering axle weight too light to steer safely. Too little\nweight on the driving axles can cause poor traction.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 3.2.4 - Balance the Weight\nНеравномерное распределение веса может сделать управление транспортным средством небезопасным. Слишком большой вес на передней оси может вызвать тяжелое управление. Это может повредить переднюю ось и шины. Недозагруженные передние оси (вызванные перекладыванием веса слишком далеко назад) могут сделать вес передней оси слишком легким для безопасного управления. Недостаточный вес на ведущих осях может вызвать плохую сцепку.",
            ]
        }
    },

    {
        "id": 79,
        "text": {
            "en": "Communication means:",
            "ru": "Коммуникация означает:",
        },
        "options": {
            "en": [
                "To communicate your intention to other motorists. ",
                "Talking with law enforcement officers.",
                "To talk on the CB radio."
            ],
            "ru": [
                "Сообщение ваших намерений другим водителям. ",
                "Разговор с сотрудниками правоохранительных органов.",
                "Общение по радио CB."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.5.1 - Signal Your Intentions\nRead section regarding the use of signaling, breaking, horn use, and light flashing as\nmethods of communication with fellow drivers.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.5.1 - Signal Your Intentions\nПрочтите раздел, касающийся использования сигналов, торможения, использования сигнала гудка и вспышки света как методов общения с другими водителями.",
                "",
                "",
            ]
        }
    },

    {
        "id": 80,
        "text": {
            "en": "If you are convicted for driving under the influence while driving a commercial vehicle, and this is your first offense, you most likely will get:",
            "ru": "Если вас признают виновным в управлении коммерческим транспортным средством в состоянии алкогольного опьянения, и это ваше первое нарушение, скорее всего, вы получите:"
        },
        "options": {
            "en": [
                "A probation period for 1 year.",
                "A fine of $250.",
                "At least one-year suspension of your CDL. "
            ],
            "ru": [
                "Испытательный срок в течение 1 года.",
                "Штраф в размере $250.",
                "Как минимум годовую приостановку вашей коммерческой лицензии (CDL). "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "Explanation: Section: 1.3.2 - Alcohol, Leaving the Scene of an Accident\nYou will lose your CDL for at least one year\nfor a first offense for: Driving a CMV under the influence of alcohol.",
                "",
                "",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 1.3.2 - Alcohol, Leaving the Scene of an Accident\nВы потеряете свою CDL как минимум на один год\nза первое нарушение вождения транспортного средства в состоянии алкогольного опьянения.",
            ]
        }
    },

    {
        "id": 81,
        "text": {
            "en": "If you are stopped at a roadside rest area and found to have a BAC (Blood Alcohol Concentration) of 0.02 you will:",
            "ru": "Если вас остановили на автомобильной стоянке для отдыха и обнаружили, что у вас BAC (концентрация алкоголя в крови) составляет 0,02, вы:"
        },
        "options": {
            "en": [
                "Be placed out of service for 24 hours. ",
                "Be placed out of service for 72 hours.",
                "Be in deep trouble with your dispatcher."
            ],
            "ru": [
                "Будете отправлены в статус \"вне службы\" на 24 часа. ",
                "Будете отправлены в статус \"вне службы\" на 72 часа.",
                "Попадете в серьезные неприятности с вашим диспетчером."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 1.3.2 - Alcohol, Leaving the Scene of an Accident\nYou will be put out of service for 24 hours if\nyou have any detectable amount of alcohol under .04 percent.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 1.3.2 - Alcohol, Leaving the Scene of an Accident\nВы будете отправлены в статус \"вне службы\" на 24 часа, если у вас есть какое-либо обнаружимое количество алкоголя менее 0,04%.",
                "",
                "",
            ]
        }
    },

    {
        "id": 82,
        "text": {
            "en": "Which of the following statements about speed management is true?",
            "ru": "Какое из следующих утверждений о управлении скоростью верно?"
        },
        "options": {
            "en": [
                "If you double your speed, stopping distance will be increased by 4 times. ",
                "Empty truck and loaded trucks will have the same stopping distance.",
                "If you double your speed, stopping distance will double."
            ],
            "ru": [
                "Если вы удвоите свою скорость, расстояние до остановки увеличится в 4 раза. ",
                "Пустые грузовики и загруженные грузовики будут иметь одинаковое расстояние до остановки.",
                "Если вы удвоите свою скорость, расстояние до остановки удвоится."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.6.1 - Stopping Distance\nThe faster you drive, the greater the impact or striking power of your vehicle. When you\ndouble your speed from 20 to 40 mph the impact is 4 times greater.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6.1 - Stopping Distance\nЧем быстрее вы едете, тем больше ударной силы вашего транспортного средства. Когда вы\nудваиваете свою скорость с 20 до 40 миль в час, удар увеличивается в 4 раза.",
                "",
                "",
            ]
        }
    },

    {
        "id": 83,
        "text": {
            "en": "You are traveling down a long, steep hill. Your brakes get so hot that they have failed. What should you do?",
            "ru": "Вы движетесь вниз по долгому крутому холму. Ваши тормоза становятся настолько горячими, что они вышли из строя. Что вы должны сделать?"
        },
        "options": {
            "en": [
                "Both.",
                "Downshift and pump the brake pedal.",
                "Look for an escape ramp or escape route. "
            ],
            "ru": [
                "Оба варианта.",
                "Понизьте передачу и нажимайте педаль тормоза.",
                "Ищите экстренный спуск или путь для выбега. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.17.3 - Brake Failure\nGoing slow enough and braking properly will almost always prevent brake failure on long downgrades. Once the brakes have failed, however, you are going to have to look\noutside your vehicle for something to stop it.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.17.3 - Brake Failure\nДвижение достаточно медленно и правильное торможение практически всегда предотвратят выход из строя тормозов на долгих спусках. Однако, как только тормоза вышли из строя, вам придется искать\nвне своего транспортного средства что-то для его остановки.",
            ]
        }
    },

    {
        "id": 84,
        "text": {
            "en": "The center of gravity of a load:",
            "ru": "Центр тяжести груза:"
        },
        "options": {
            "en": [
                "Can make a vehicle more likely to tip over on curves if it is high. ",
                "Should be kept as high as possible.",
                "Is only a problem if the vehicle is overloaded."
            ],
            "ru": [
                "Может увеличить вероятность опрокидывания транспортного средства во время поворотов, если он высоко расположен. ",
                "Должен быть поддержан как можно выше.",
                "Является проблемой только в случае перегрузки транспортного средства."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 3.2.3 - Do Not Be Top-Heavy\nThe height of the vehicle's center of gravity is very important for safe handling. A high center of gravity (cargo piled up high or heavy cargo on top) means you are more likely to tip over. It is most dangerous in curves, or if you have to swerve to avoid a hazard. It is very\nimportant to distribute the cargo as low as possibe.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 3.2.3 - Do Not Be Top-Heavy\nВысота центра тяжести транспортного средства очень важна для безопасного управления. Высокий центр тяжести (груз, сложенный высоко или тяжелый груз сверху) означает, что вы более подвержены опрокидыванию. Это наиболее опасно в поворотах или если вам приходится резко сворачивать, чтобы избежать опасности. Очень\nважно распределять груз как можно ниже.",
                "",
                "",
            ]
        }
    },

    {
        "id": 85,
        "text": {
            "en": "To prevent a load from shifting, there should be at least one tie down for every __ feet of cargo.",
            "ru": "Чтобы предотвратить смещение груза, должна быть как минимум одна привязка на каждые __ футов груза."
        },
        "options": {
            "en": [
                "20",
                "15",
                "10 "
            ],
            "ru": [
                "20",
                "15",
                "10 "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 3.3.2 - Cargo Tie-down\nCargo should have at least one tie-down for each ten feet of cargo. Make sure you have enough tie-downs to meet this need. No matter how small the cargo, it should have at least two tie-downs.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 3.3.2 - Cargo Tie-down\nГруз должен иметь как минимум одну привязку на каждые десять футов груза. Убедитесь, что у вас есть достаточно привязок, чтобы удовлетворить эту потребность. Независимо от размера груза, на нем должно быть как минимум две привязки.",
            ]
        }
    },

    {
        "id": 86,
        "text": {
            "en": "While driving, ice builds up on your wipers and they no longer clean the windshield. You should:",
            "ru": "Во время движения на ваших стеклоочистителях образуется лед, и они больше не очищают лобовое стекло. Что вы должны сделать?"
        },
        "options": {
            "en": [
                "Keep driving and turn your defroster on.",
                "Stop safely and fix the problem. ",
                "Keep driving and spray the windshield with washer fluid."
            ],
            "ru": [
                "Продолжайте движение и включите отопление стекол.",
                "Безопасно остановитесь и устраните проблему. ",
                "Продолжайте движение и опрыскивайте лобовое стекло жидкостью для омывания."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.13.1 - Vehicle Checks\nUse windshield washer antifreeze to prevent freezing of the washer liquid. If you cannot see well enough while driving (for example, if your wipers fail), stop safely and fix the problem.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.13.1 - Vehicle Checks\nИспользуйте антифриз для омывателя стекол, чтобы предотвратить замерзание омывательной жидкости. Если вы плохо видите во время движения (например, если ваши стеклоочистители не работают), безопасно остановитесь и устраните проблему.",
                "",
            ]
        }
    },

    {
        "id": 87,
        "text": {
            "en": "When the hydraulic brakes fail while you are driving, the system will not build up pressure and the brake pedal will feel spongy or go to the floor. What should you do?",
            "ru": "Когда гидравлические тормоза отказывают во время движения, система не набирает давление, и педаль тормоза становится мягкой или опускается на пол. Что вы должны сделать?"
        },
        "options": {
            "en": [
                "Push down the brake pedal as hard as you can.",
                "Pump the brake pedal to generate pressure. ",
                "Put the vehicle in neutral and set the parking brake."
            ],
            "ru": [
                "Нажмите на педаль тормоза так крепко, как только сможете.",
                "Нажимайте на педаль тормоза для создания давления. ",
                "Переключите автомобиль в нейтраль и установите стояночный тормоз."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.17.3 - Brake Failure\nPump the Brakes: Sometimes pumping the brake pedal will generate enough hydraulic pressure to stop the vehicle.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.17.3 - Brake Failure\nПомпируйте тормоза: Иногда повторное нажатие на педаль тормоза создаст достаточное гидравлическое давление для остановки автомобиля.",
                "",
            ]
        }
    },

    {
        "id": 88,
        "text": {
            "en": "Which may be a sign of tire failure?",
            "ru": "Что может быть признаком поломки шины?"
        },
        "options": {
            "en": [
                "A loud hissing noise.",
                "Vibration. ",
                "Wheels skidding."
            ],
            "ru": [
                "Громкий шипящий звук.",
                "Вибрация. ",
                "Скольжение колес."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.17.4 - Tire Failure\nVibration: If the vehicle thumps or vibrates heavily, it may be a sign that one of the tires has gone flat. With a rear tire, that may be the only sign you get.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.17.4 - Tire Failure\nВибрация: Если транспортное средство стучит или сильно вибрирует, это может быть признаком того, что одна из шин спущена. В случае с задней шиной это может быть единственным признаком.",
                "",
            ]
        }
    },

    {
        "id": 89,
        "text": {
            "en": "To prevent brake fade you should:",
            "ru": "Чтобы предотвратить выгорание тормозов, вы должны:"
        },
        "options": {
            "en": [
                "Coast downhill if its not very steep.",
                "Select the gear, which will keep your vehicle to a safe speed on a deep downgrade. ",
                "Apply constant hard pressure on the brakes while driving downhill."
            ],
            "ru": [
                "Катиться вниз, если уклон не очень крут.",
                "Выбирать передачу, которая позволит вам поддерживать безопасную скорость на крутом спуске. ",
                "Постоянно сильно нажимать на тормоза при спуске."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.16 - Mountain Driving\nIn coming down long, steep downgrades, gravity causes the speed of your vehicle to increase. You must select an appropriate safe speed, and then use a low gear, and proper braking techniques.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.16 - Mountain Driving\nПри движении по долгим и крутым спускам гравитация вызывает увеличение скорости вашего транспортного средства. Вы должны выбрать подходящую безопасную скорость, а затем использовать низкую передачу и правильные техники торможения.",
                "",
            ]
        }
    },

    {
        "id": 90,
        "text": {
            "en": "A full stop is required at a railroad crossing when:",
            "ru": "Полная остановка требуется на железнодорожном переезде, когда:"
        },
        "options": {
            "en": [
                "There is no flagman, warning signals or gate at the crossing.",
                "The nature of the cargo makes a stop mandatory under the State or Federal regulations. ",
                "The crossing is in the city or town with frequent train transit."
            ],
            "ru": [
                "Нет сигнальщика, предупреждающих сигналов или шлагбаума на переезде.",
                "Характер груза обязывает к остановке в соответствии с штатными или федеральными нормами. ",
                "Переезд находится в городе или поселке с частым движением поездов."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 9.6.12 - Stop Before Railroad Crossings\nStop before a railroad crossing if your vehicle:\nis placarded, carries any amount of chlorine, or has cargo tanks, whether loaded or empty used for hazardous materials.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 9.6.12 - Stop Before Railroad Crossings\nОстановитесь перед железнодорожным переездом, если ваше транспортное средство:\nимеет опасные грузы, перевозит хлор или имеет грузовые цистерны, независимо от того, заполнены они или пусты.",
                "",
            ]
        }
    },

    {
        "id": 91,
        "text": {
            "en": "When driving at night you should use your high beams when oncoming traffic is not within __feet?",
            "ru": "При вождении ночью вы должны использовать дальний свет, когда встречный трафик находится не в пределах __ футов?"
        },
        "options": {
            "en": [
                "400",
                "300",
                "500 "
            ],
            "ru": [
                "400",
                "300",
                "500 "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.11.5 - Night Driving Procedures\nSome drivers make the mistake of always using low beams. This seriously cuts down on their ability to see ahead. Use high beams when it is safe and legal to do so. Use them when you are not within 500 feet of an approaching vehicle.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.11.5 - Ночные процедуры вождения\nНекоторые водители допускают ошибку, всегда используя ближний свет. Это серьезно снижает их способность видеть вперед. Используйте дальний свет, когда это безопасно и законно. Используйте его, когда вы не находитесь в пределах 500 футов от приближающегося транспортного средства.",
            ]
        }
    },

    {
        "id": 92,
        "text": {
            "en": "When driving through the work zone you should:",
            "ru": "При движении через рабочую зону вы должны:"
        },
        "options": {
            "en": [
                "Reduce your speed only if workers are close to the roadway.",
                "Watch for sharp pavement drop off. ",
                "Turn on your parking lights."
            ],
            "ru": [
                "Снизить скорость только если рабочие близко к дороге.",
                "Остерегайтесь резкого снижения уровня дорожного покрытия. ",
                "Включите аварийные огни парковки."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.8.2 - Hazardous Roads\nWhen people are working on the road, it is a hazard. There may be narrower lanes, sharp turns, or uneven surfaces. Other drivers are often distracted and drive unsafely. Workers and construction vehicles may get in the way. Drive slowly and carefully near work zones. Use your four-way flashers or brake lights to warn drivers behind you.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.8.2 - Опасные дороги\nКогда люди работают на дороге, это опасность. Могут быть уже узкие полосы движения, резкие повороты или неровные поверхности. Другие водители часто отвлекаются и ездят небезопасно. Рабочие и строительные транспортные средства могут находиться на пути. Двигайтесь медленно и осторожно вблизи рабочих зон. Используйте аварийные мигалки или тормозные огни, чтобы предупредить водителей, следующих сзади.",
                "",
            ]
        }
    },

    {
        "id": 93,
        "text": {
            "en": "Backing of the commercial vehicle is:",
            "ru": "Маневрирование задним ходом коммерческого транспортного средства:"
        },
        "options": {
            "en": [
                "Not dangerous if you don't have to turn.",
                "Always dangerous. ",
                "Not dangerous if you have a helper."
            ],
            "ru": [
                "Не опасно, если вам не нужно поворачивать.",
                "Всегда опасно. ",
                "Не опасно, если у вас есть помощник."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.2.4 - Backing Safely\nBecause you cannot see everything behind your vehicle, backing is always dangerous. Avoid backing whenever you can.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.2.4 - Безопасное маневрирование задним ходом\nПоскольку вы не можете видеть всё, что находится за вашим транспортным средством, маневрирование задним ходом всегда опасно. Старайтесь избегать маневрирования задним ходом всякий раз, когда это возможно.",
                "",
            ]
        }
    },

    {
        "id": 94,
        "text": {
            "en": "When you are parked on the side of the road at night you must:",
            "ru": "Когда вы припаркованы на обочине дороги ночью, вы должны:"
        },
        "options": {
            "en": [
                "Turn on your four-way-emergency flashers to warn others. ",
                "Use your taillights to give warning to other drivers.",
                "Put out your emergency warning lights within 30 minutes."
            ],
            "ru": [
                "Включите аварийные мигающие сигналы, чтобы предупредить других. ",
                "Используйте задние фонари, чтобы предупредить других водителей.",
                "Выключите аварийные мигающие огни в течение 30 минут."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.5.2 - Communicating Your Presence\nWhen you pull off the road and stop, be sure to turn on the four-way emergency flashers. This is important at night. Don't trust the tail lights to give warning. Drivers have crashed into the rear of a parked vehicle because they thought it was moving normally.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.5.2 - Сообщение о вашем присутствии\nКогда вы съезжаете с дороги и останавливаетесь, обязательно включите аварийные мигающие сигналы. Это особенно важно ночью. Не доверяйте задним фарам для предупреждения. Водители могли столкнуться с задней частью припаркованного транспортного средства, так как они думали, что оно движется нормально.",
                "",
                "",
            ]
        }
    },

    {
        "id": 95,
        "text": {
            "en": "You must stop on a hill or curve on a two-lane-two-way road. How far should you place reflective triangles?",
            "ru": "Вы должны остановиться на холме или повороте на двухполосной двухсторонней дороге. На каком расстоянии вы должны поставить отражающие треугольники?"
        },
        "options": {
            "en": [
                "Within 500 feet behind you. ",
                "Within 200 feet behind you.",
                "As far back as necessary so others can see you."
            ],
            "ru": [
                "В пределах 500 футов позади вас. ",
                "В пределах 200 футов позади вас.",
                "На столько далеко назад, сколько необходимо, чтобы другие могли вас видеть."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.5.2 - Communicating Your Presence\nBack beyond any hill, curve, or other obstruction that prevents other drivers from seeing the vehicle within 500 feet. If line of sight view is obstructed due to hill or curve, move the rear-most triangle to a point back down the road so warning is provided.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.5.2 - Сообщение о вашем присутствии\nПоместите отражающие треугольники за любым холмом, поворотом или другим препятствием, которое мешает другим водителям видеть транспортное средство в пределах 500 футов. Если видимость мешает холмом или поворотом, переместите задний треугольник на расстояние назад по дороге, чтобы обеспечить предупреждение.",
                "",
                "",
            ]
        }
    },

    {
        "id": 96,
        "text": {
            "en": "Stab braking should not be used on vehicles with:",
            "ru": "Кратковременное торможение не следует использовать на транспортных средствах с:"
        },
        "options": {
            "en": [
                "Trailers.",
                "Hazardous materials.",
                "Anti-lock brakes. "
            ],
            "ru": [
                "Прицепами.",
                "Опасными материалами.",
                "Антиблокировочными тормозами. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.17.2 - How to Stop Quickly and Safely\nStab braking, can only be done in vehicles without antilock brake systems (ABS).",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.17.2 - Как остановиться быстро и безопасно\nКратковременное торможение может выполняться только на транспортных средствах без систем антиблокировки тормозов (ABS).",
            ]
        }
    },

    {
        "id": 97,
        "text": {
            "en": "Sometimes you need to leave a road to avoid a hazard or emergency. When you do, you should keep in mind, that:",
            "ru": "Иногда вам нужно покинуть дорогу, чтобы избежать опасности или чрезвычайной ситуации. Когда вы это делаете, вы должны помнить, что:"
        },
        "options": {
            "en": [
                "You might be unable to re-enter the road because of the gravel used on shoulders.",
                "Most shoulders are not strong enough to support a heavy vehicle.",
                "It is less dangerous to drive onto the shoulders than to cause a collision. "
            ],
            "ru": [
                "Возможно, вы не сможете вернуться на дорогу из-за гравия, используемого на обочинах.",
                "Большинство обочин не достаточно прочны для поддержания тяжелого транспортного средства.",
                "Это менее опасно, чем сталкиваться и вызвать столкновение. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.17.1 - Steering to Avoid an Accident\nIn some emergencies, you may have to drive off the road. It may be less risky than facing an accident with another vehicle. Most shoulders are strong enough to support the weight of a large vehicle and, therefore, offer an available escape route.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.17.1 - Управление для избегания аварии\nВ некоторых чрезвычайных ситуациях вам может потребоваться выехать с дороги. Это может быть менее рискованным, чем столкновение с другим транспортным средством. Большинство обочин достаточно прочны для поддержания веса большого транспортного средства и, следовательно, предоставляют доступный путь для ухода.",
            ]
        }
    },

    {
        "id": 98,
        "text": {
            "en": "Which of the following is NOT a characteristic of tire failure?",
            "ru": "Какая из следующих характеристик не является признаком отказа шины?"
        },
        "options": {
            "en": [
                "Vehicle's fishtail.",
                "Cold steering. ",
                "Steering wheel twisting."
            ],
            "ru": [
                "Перекатывание автомобиля.",
                "Холодное управление. ",
                "Вращение руля."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.17.4 - Tire Failure\nSometimes, failure of a rear tire will cause the vehicle to slide back and forth or \"fishtail\". However, dual rear tires usually prevent this.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.17.4 - Отказ шины\nИногда отказ задней шины может вызвать движение автомобиля вперед и назад, или \"рыбий хвост\". Однако двойные задние шины обычно предотвращают это.",
                "",
            ]
        }
    },

    {
        "id": 99,
        "text": {
            "en": "Most skids:",
            "ru": "Большинство заносов:"
        },
        "options": {
            "en": [
                "Do not happen with radial tires.",
                "Are caused by going too fast or trying to stop too quickly. ",
                "Happen on ice."
            ],
            "ru": [
                "Не происходят с радиальными шинами.",
                "Вызваны слишком высокой скоростью или попыткой слишком быстро остановиться. ",
                "Происходят на льду."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.19 Skid Control and Recovery\nMost serious skids result from driving too fast for road conditions. Drivers who adjust their driving to conditions don't over-accelerate and don't have to over-brake or over-steer from too much speed.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.19 Управление и восстановление заноса\nБольшинство серьезных заносов происходит из-за слишком высокой скорости для дорожных условий. Водители, которые адаптируют свое вождение к условиям, не переускоряются и не вынуждены слишком сильно тормозить или перекручивать руль из-за слишком большой скорости.",
                "",
            ]
        }
    },

    {
        "id": 100,
        "text": {
            "en": "In bad weather many drivers tailgate large vehicles. What should you do?",
            "ru": "В плохую погоду многие водители придерживаются плотно к большим транспортным средствам. Что вы должны сделать?"
        },
        "options": {
            "en": [
                "Speed up to distance yourself from the tailgater.",
                "Increase your following distance. ",
                "Lightly tap your brake to warn the tailgater to drop back."
            ],
            "ru": [
                "Ускорьтесь, чтобы отдалиться от водителя, следующего слишком близко.",
                "Увеличьте дистанцию следования. ",
                "Нажмите на тормоза, чтобы предупредить водителя сзади, чтобы он отошел назад."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.7.2 - Space Behind\nIncrease your following distance. Opening up room in front of you will help you to avoid having to make sudden speed or direction changes. It also makes it easier for the tailgater to get around you.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.7.2 - Пространство сзади\nУвеличьте дистанцию следования. Открыв место перед вами, вы избежите необходимости делать резкие изменения скорости или направления. Это также облегчит задачу для водителя, следующего плотно сзади, чтобы обогнать вас.",
                "",
            ]
        }
    },

    {
        "id": 101,
        "text": {
            "en": "Which of the following systems should receive extra attention during winter weather inspection?",
            "ru": "Какие из следующих систем следует особенно внимательно проверить во время зимнего обслуживания?"
        },
        "options": {
            "en": [
                "Exhaust. ",
                "Suspension.",
                "Steering."
            ],
            "ru": [
                "Выхлопная система. ",
                "Подвеска.",
                "Управление."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.13.1 - Vehicle Checks\nExhaust system leaks are especially dangerous when cab ventilation may be poor (windows rolled up, etc.). Loose connections could permit poisonous carbon monoxide to leak into your vehicle. Carbon monoxide gas will cause you to be sleepy. In large enough amounts it can kill you. Check the exhaust system for loose parts and for sounds and signs of leaks.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.13.1 - Проверка транспортного средства\nУтечки выхлопной системы особенно опасны, когда вентиляция в кабине может быть плохой (поднятые окна и т. д.). Разъединенные соединения могут позволить ядовитому угарному газу проникнуть в ваше транспортное средство. Угарный газ усыпит вас. В больших количествах он может убить вас. Проверьте выхлопную систему на наличие разъединенных деталей и на звуки и признаки утечек.",
                "",
                "",
            ]
        }
    },

    {
        "id": 102,
        "text": {
            "en": "What happens to tar on the road pavement during hot weather?",
            "ru": "Что происходит с дегтем на дорожном покрытии в жаркую погоду?"
        },
        "options": {
            "en": [
                "It becomes staining making tires stick to the road.",
                "Nothing.",
                "It bleeds making the road surface slippery. "
            ],
            "ru": [
                "Он становится пятнами, заставляя шины прилипать к дороге.",
                "Ничего.",
                "Он выделяется, делая дорожное покрытие скользким. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.14.2 - Driving\nTar in the road pavement frequently rises to the surface in very hot weather. Spots where tar \"bleeds\" to the surface are very slippery.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.14.2 - Вождение\nДеготь на дорожном покрытии часто поднимается на поверхность в очень жаркую погоду. Места, где деготь \"выделяется\" на поверхность, очень скользки.",
            ]
        }
    },

    {
        "id": 103,
        "text": {
            "en": "What is the best advice for drivers when a heavy fog occurs?",
            "ru": "Какой лучший совет для водителей, когда случается густой туман?"
        },
        "options": {
            "en": [
                "Park the truck until the fog disappears. ",
                "Alternate your own high beams to improve your vision.",
                "Do not drive too slowly or other drivers may hit you."
            ],
            "ru": [
                "Припарковать грузовик, пока туман не исчезнет. ",
                "Переключайте свой дальний свет, чтобы улучшить видимость.",
                "Не ездите слишком медленно, иначе другие водители могут вас задеть."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.12 - Driving in Fog\nThe best advice for driving in fog is: do not. It is preferable that you pull off the road into a rest area or truck stop until visibility is better.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.12 - Вождение в тумане\nСамый лучший совет для вождения в тумане: не делайте этого. Желательно, чтобы вы съехали с дороги на парковку или автостоянку до тех пор, пока видимость не улучшится.",
                "",
                "",
            ]
        }
    },

    {
        "id": 104,
        "text": {
            "en": "In mountain driving you will have to use a lower gear to drive safely on a grade. Which of these does NOT affect your choice of gear?",
            "ru": "При движении в горах вам придется использовать более низкую передачу, чтобы безопасно подниматься на подъеме. Какой из следующих факторов НЕ влияет на ваш выбор передачи?"
        },
        "options": {
            "en": [
                "Tire thread's depth. ",
                "The length of the grade.",
                "The weight of the load."
            ],
            "ru": [
                "Глубина протектора шин. ",
                "Длина подъема.",
                "Вес груза."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.6.6 - Speed on Downgrades\nYour most important objective is to select and maintain a speed that is not too fast for the:\ntotal weight of the vehicle and cargo, length of the grade, steepness of the grade, road conditions, and weather.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6.6 - Скорость на спусках\nВашей наиболее важной задачей является выбор и поддержание скорости, которая не слишком высока для:\nобщей массы транспортного средства и груза, длины подъема, крутизны подъема, дорожных условий и погоды.",
                "",
                "",
            ]
        }
    },

    {
        "id": 105,
        "text": {
            "en": "What should you do before driving in mountains?",
            "ru": "Что вы должны сделать перед поездкой в горы?"
        },
        "options": {
            "en": [
                "Know escape ramp locations on your way. ",
                "Unhook your steering axle brake.",
                "Carry the tire chains in your vehicle."
            ],
            "ru": [
                "Знайте местоположение аварийных полос на вашем пути. ",
                "Отсоедините тормоз на передней оси.",
                "Возьмите цепи для шин в вашем транспортном средстве."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.16.4 - Proper Braking Technique\nKnow escape ramp locations on your route.\nSigns show drivers where ramps are located. Escape ramps save lives, equipment and cargo.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.16.4 - Правильная техника торможения\nЗнайте местоположение аварийных полос на вашем маршруте.\nЗнаки показывают водителям, где находятся полосы. Аварийные полосы спасают жизни, оборудование и груз.",
                "",
                "",
            ]
        }
    },

    {
        "id": 106,
        "text": {
            "en": "Escape ramps:",
            "ru": "Аварийные полосы:"
        },
        "options": {
            "en": [
                "Should be used by any driver who loses braking power. ",
                "Are not designed for tractors-double trailers.",
                "Are designed to slow vehicles so they can get back on the road at the safe speed."
            ],
            "ru": [
                "Должны использоваться любым водителем, который теряет тормозную мощность. ",
                "Не предназначены для тягачей с полуприцепами.",
                "Предназначены для замедления транспортных средств, чтобы они могли вернуться на дорогу со безопасной скоростью."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.16.4 - Proper Braking Technique\nEscape ramps have been built on many steep mountain downgrades. Escape ramps are made to stop runaway vehicles safely without injuring drivers and passengers. Escape ramps use a long bed of loose, soft material to slow a runaway vehicle, sometimes in combination with an upgrade.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.16.4 - Правильная техника торможения\nАварийные полосы были построены на многих крутых спусках горных маршрутов. Аварийные полосы предназначены для безопасной остановки бегущих транспортных средств, чтобы не нанести вред водителям и пассажирам. Аварийные полосы используют длинное ложе из мягкого, рыхлого материала, чтобы замедлить бегущее транспортное средство, иногда в сочетании с подъемом.",
                "",
                "",
            ]
        }
    },

    {
        "id": 107,
        "text": {
            "en": "Which of these is true about notifying the authorities after an accident occurs?",
            "ru": "Что из следующего верно относительно уведомления органов власти после аварии?"
        },
        "options": {
            "en": [
                "An exact location is not necessary just identify the road and the vehicles involved.",
                "If you have a cellular phone or CB radio you should notify the authorities before exiting the vehicle. ",
                "You should notify authorities about an accident before doing anything else."
            ],
            "ru": [
                "Точное местоположение не обязательно, просто укажите дорогу и участвующие в аварии транспортные средства.",
                "Если у вас есть мобильный телефон или радиостанция CB, вы должны уведомить органы власти перед тем, как покинуть транспортное средство. ",
                "Вы должны уведомить органы власти о происшествии перед любыми другими действиями."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.20.2 - Notify Authorities\nIf you have a cell phone or CB, call for assistance before you get out of your vehicle. If not, wait until after the accident scene has been properly protected, then phone or send someone to phone the police. Try to determine where you are so you can give the exact location.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.20.2 - Уведомление органов власти\nЕсли у вас есть мобильный телефон или радиостанция CB, позвоните за помощью, прежде чем выйти из транспортного средства. Если нет, подождите, пока место происшествия будет правильно охраняться, затем позвоните или попросите кого-то позвонить в полицию. Попытайтесь определить, где вы находитесь, чтобы сообщить точное местоположение.",
                "",
            ]
        }
    },

    {
        "id": 108,
        "text": {
            "en": "If you are not sure what to use to put out a hazardous material fire you should:",
            "ru": "Если вы не уверены, что использовать для тушения пожара опасных веществ, вы должны:"
        },
        "options": {
            "en": [
                "Use dirt.",
                "Wait for fire fighters. ",
                "Use water."
            ],
            "ru": [
                "Использовать грязь.",
                "Подождите пожарных. ",
                "Используйте воду."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.21.3 - Fire Fighting\nUse the Right Fire Extinguisher: If you're not sure what to use, especially on a hazardous materials fire, wait for firefighters.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.21.3 - Тушение пожара\nИспользуйте подходящий огнетушитель: Если вы не уверены, что использовать, особенно при пожаре опасных материалов, подождите пожарных.",
                "",
            ]
        }
    },

    {
        "id": 109,
        "text": {
            "en": "Which of these is NOT a danger of a rough acceleration?",
            "ru": "Что из следующего НЕ является опасностью грубого ускорения?"
        },
        "options": {
            "en": [
                "Mechanical damage.",
                "Damage of a coupling.",
                "Tire damage. "
            ],
            "ru": [
                "Механические повреждения.",
                "Повреждение соединения.",
                "Повреждение шины. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.2.1 - Accelerating\nSpeed up smoothly and gradually so the vehicle does not jerk. Rough acceleration can cause mechanical damage. When pulling a trailer, rough acceleration can damage the coupling.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.2.1 - Ускорение\nУскоряйтесь плавно и постепенно, чтобы транспортное средство не рывками. Грубое ускорение может привести к механическим повреждениям. При движении с прицепом грубое ускорение может повредить соединение.",
            ]
        }
    },

    {
        "id": 110,
        "text": {
            "en": "Which of these lights cannot be checked at the same time?",
            "ru": "Какие из этих огней нельзя проверить одновременно?"
        },
        "options": {
            "en": [
                "Turn signals, tail lights, and clearance lights.",
                "Headlights, brake lights, and clearance lights.",
                "Turn signals, brake lights, and four-way flashers. "
            ],
            "ru": [
                "Поворотники, задние огни и противотуманные фары.",
                "Передние фары, стоп-сигналы и противотуманные фары.",
                "Поворотники, стоп-сигналы и аварийная сигнализация. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.1.4 - CDL Pre-Trip Vehicle Inspection Test\nStep 6: Get out and Check the Lights: Checks of brake, turn signal, and 4-way flasher functions must be done separately.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.4 - Тест на предварительный осмотр транспортного средства CDL\nШаг 6: Выйдите и проверьте огни: проверки функций тормоза, поворотного сигнала и аварийной сигнализации должны проводиться отдельно.",
            ]
        }
    },

    {
        "id": 111,
        "text": {
            "en": "You are inspecting hydraulic brakes. You should pump the brake pedal three times then apply firm pressure to the pedal for five seconds. If the brakes are working properly, the pedal should:",
            "ru": "Вы проверяете гидравлические тормоза. Вы должны нажать на тормозной педаль три раза, затем на 5 секунд приложить к педали сильное давление. Если тормоза работают нормально, то педаль:"
        },
        "options": {
            "en": [
                "Sink to the floor.",
                "Depress slightly.",
                "Not move. "
            ],
            "ru": [
                "Уйдет до пола.",
                "Немного опустится.",
                "Не будет двигаться. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.1.4 - CDL Pre-Trip Vehicle Inspection Test\nIf the vehicle has hydraulic brakes, pump the brake pedal three times. Then apply firm pressure to the pedal and hold for five seconds. The pedal should not move. If it does, there may be a leak or other problem. Get it fixed before driving.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.4 - Тест на предварительный осмотр транспортного средства CDL\nЕсли у транспортного средства гидравлические тормоза, нажмите на тормозную педаль три раза. Затем приложите к педали сильное давление и удерживайте в течение пяти секунд. Педаль не должна двигаться. Если она двигается, возможно, есть утечка или другая проблема. Устраните ее перед тем, как выезжать.",
            ]
        }
    },

    {
        "id": 112,
        "text": {
            "en": "Drivers of trucks and tractor-trailers with cargo must check that the cargo is well secured within the first __miles of the trip.",
            "ru": "Водители грузовиков и тягачей с полуприцепами с грузом должны проверить, что груз хорошо закреплен в первых __милях поездки."
        },
        "options": {
            "en": [
                "25",
                "10",
                "50 "
            ],
            "ru": [
                "25",
                "10",
                "50 "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.1.6 - Inspection During a Trip\nDrivers of trucks and truck tractors when transporting cargo must inspect the securement of the cargo within the first 50 miles of a trip and every 150 miles or every three hours (whichever comes first) after.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.6 - Проверка во время поездки\nВодители грузовиков и тягачей при транспортировке груза должны проверить закрепление груза в первых 50 милях поездки и каждые 150 миль или каждые три часа (в зависимости от того, что произойдет раньше) после этого.",
            ]
        }
    },

    {
        "id": 113,
        "text": {
            "en": "When starting a bus on a level surface with good traction there is often no need for:",
            "ru": "Когда вы начинаете движение автобуса на ровной поверхности с хорошей сцеплением, часто нет необходимости:"
        },
        "options": {
            "en": [
                "A tire check.",
                "Parking brakes. ",
                "Slow acceleration."
            ],
            "ru": [
                "Проверять шины.",
                "Применять стояночные тормоза. ",
                "Замедленное ускорение."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 5.4.8 - Parking Brakes\nUse wheel chocks on a level surface to hold the vehicle. Let hot brakes cool before using the parking brakes. If the brakes are wet, use the brakes lightly while driving in a low gear to heat and dry them.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 5.4.8 - Стояночные тормоза\nИспользуйте клинья для колес на ровной поверхности, чтобы удерживать транспортное средство. Дайте горячим тормозам остыть перед использованием стояночных тормозов. Если тормоза мокрые, используйте тормоза слегка, двигаясь на низкой передаче, чтобы нагреть и высушить их.",
                "",
            ]
        }
    },

    {
        "id": 114,
        "text": {
            "en": "How does the weight of the vehicle affect stopping distance?",
            "ru": "Как вес транспортного средства влияет на дистанцию торможения?"
        },
        "options": {
            "en": [
                "Fully loaded trucks take longer to stop, or the buses loaded with passengers take less distance than empty ones.",
                "If brakes work, weight will have no effect on stopping distance.",
                "Empty trucks take longer to stop than if loaded, but this is not the normal case for buses. "
            ],
            "ru": [
                "Полностью загруженные грузовики останавливаются дольше, а автобусы с пассажирами останавливаются на меньшем расстоянии, чем пустые.",
                "Если тормоза работают, вес не будет влиять на дистанцию торможения.",
                "Пустые грузовики останавливаются дольше, чем если бы они были загружены, но это не является обычным случаем для автобусов. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.6.1 - Stopping Distance\nThe heavier the vehicle, the more work the brakes must do to stop it, and the more heat they absorb. But the brakes, tires, springs, and shock absorbers on heavy vehicles are designed to work best when the vehicle is fully loaded. Empty trucks require greater stopping distances because an empty vehicle has less traction.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.6.1 - Дистанция торможения\nЧем тяжелее транспортное средство, тем больше работы должны проделать тормоза, чтобы остановить его, и тем больше тепла они поглощают. Но тормоза, шины, пружины и амортизаторы на тяжелых транспортных средствах разработаны так, чтобы работать наилучшим образом, когда транспортное средство полностью загружено. Пустые грузовики требуют большей дистанции торможения, потому что у пустого транспортного средства меньше сцепления.",
            ]
        }
    },

    {
        "id": 115,
        "text": {
            "en": "When you are starting to move up a hill from a stop:",
            "ru": "Когда вы начинаете движение в гору с места:"
        },
        "options": {
            "en": [
                "Keep the trailer brake hand valve applied until you reach 20 mph.",
                "Engage the clutch and accelerate quickly.",
                "Release the parking brakes as you apply engine power. "
            ],
            "ru": [
                "Держите ручной тормоз прицепа включенным до достижения скорости 20 миль в час.",
                "Включите сцепление и быстро ускорьтесь.",
                "Отпустите стояночные тормоза при применении мощности двигателя. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.2.1 - Accelerating\nRelease the parking brake only when you have applied enough engine power to keep from rolling back. On a tractor-trailer equipped with a trailer brake hand valve, the hand valve can be applied to keep from rolling back.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.2.1 - Ускорение\nОтпустите стояночный тормоз только тогда, когда вы применили достаточно мощности двигателя, чтобы не начать откат. На грузовиках с полуприцепами, оснащенных ручным тормозом для прицепа, ручной тормоз можно применять, чтобы избежать отката.",
            ]
        }
    },

    {
        "id": 116,
        "text": {
            "en": "What is true about using a heater?",
            "ru": "Что верно относительно использования обогревателя?"
        },
        "options": {
            "en": [
                "You must have at least one extra heater such as a mirror heater, battery pack heater, or fuel tank heater when temperature drops below freezing point.",
                "When driving in winter weather, you should check that the heater is working properly before starting your trip. ",
                "If you feel sleepy, warming of your cab with the heater will help you stay alert."
            ],
            "ru": [
                "У вас должен быть хотя бы один дополнительный обогреватель, такой как обогреватель зеркала, обогреватель батареи или обогреватель топливного бака, когда температура опускается ниже точки замерзания.",
                "Когда вы едете в зимних условиях, перед началом поездки вы должны проверить, что обогреватель работает нормально. ",
                "Если вы чувствуете сонливость, обогрев кабины поможет вам оставаться бодрствующим."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.13.1 - Vehicle Checks\nMake sure the heater is working, and that you know how to operate it. If you use other heaters and expect to need them (e.g., mirror heaters, battery box heaters, fuel tank heaters), check their operation.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.13.1 - Проверки транспортного средства\nУбедитесь, что обогреватель работает, и что вы знаете, как им пользоваться. Если вы используете другие обогреватели и ожидаете, что вам они понадобятся (например, обогреватели зеркал, обогреватели аккумуляторных батарей, обогреватели топливных баков), проверьте их работу.",
                "",
            ]
        }
    },

    {
        "id": 117,
        "text": {
            "en": "Why is damage to the exhaust system a danger?",
            "ru": "Почему повреждение выхлопной системы опасно?"
        },
        "options": {
            "en": [
                "You can pollute the air with the exhaust smoke.",
                "Noise can damage the driver's ears.",
                "Poisonous fumes can enter the cab or sleeping compartment. "
            ],
            "ru": [
                "Вы можете загрязнить воздух выхлопным дымом.",
                "Шум может повредить слух водителя.",
                "Ядовитые газы могут попасть в кабину или спальное отделение. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.1.3 - What to Look For\nA broken exhaust system can let poison fumes into the cab or sleeper berth.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.3 - Что искать\nПоврежденная выхлопная система может позволить ядовитым газам попасть в кабину или спальное место.",
            ]
        }
    },

    {
        "id": 118,
        "text": {
            "en": "Which of these is NOT a danger when an automatic transmission is forced into a low gear at a high speed?",
            "ru": "Какая из этих ситуаций НЕ представляет опасности, когда автоматическая трансмиссия вынуждена переключиться на низкую передачу при высокой скорости?"
        },
        "options": {
            "en": [
                "A loss of engine braking effect.",
                "Damage to the transmission.",
                "A loss of steering control. "
            ],
            "ru": [
                "Потеря эффекта двигательного торможения.",
                "Повреждение трансмиссии.",
                "Потеря контроля над управлением. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.16.2 - Select the Right Gear Before Starting Down the Grade\nForcing an automatic transmission into a lower gear at high speed could damage the transmission and also lead to loss of all engine braking effect.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.16.2 - Выберите правильную передачу перед началом спуска\nПринудительное переключение автоматической трансмиссии на более низкую передачу при высокой скорости может повредить трансмиссию и также привести к потере всего эффекта двигательного торможения.",
            ]
        }
    },

    {
        "id": 119,
        "text": {
            "en": "Perception distance is the distance your vehicle travels from the time:",
            "ru": "Дистанция восприятия - это расстояние, на которое ваше транспортное средство перемещается с момента:",
        },
        "options": {
            "en": [
                "The eyes see a hazard to the time the brain knows that this is a hazard. ",
                "Your eyes see a hazard to the time your foot pushes the brake pedal.",
                "The brain tells the foot to push the brake pedal to time the foot responses."
            ],
            "ru": [
                "Когда глаза видят опасность до того момента, как мозг понимает, что это опасность. ",
                "Когда глаза видят опасность до того момента, как нога нажимает на педаль тормоза.",
                "Когда мозг говорит ноге нажать на педаль тормоза, чтобы время реакции ноги."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.6.1 - Stopping Distance\nPerception Distance: The distance your vehicle travels, in ideal conditions, from the time your eyes see a hazard until your brain recognizes it.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6.1 - Дистанция торможения\nДистанция восприятия: Расстояние, которое ваше транспортное средство проходит в идеальных условиях с момента, когда ваши глаза видят опасность, до момента, когда ваш мозг ее распознает.",
                "",
                "",
            ]
        }
    },

    {
        "id": 120,
        "text": {
            "en": "Extra care is needed to keep your vehicle centered in your lane because commercial vehicles:",
            "ru": "Требуется дополнительное внимание, чтобы сохранить ваше транспортное средство по центру полосы, потому что коммерческие транспортные средства:",
        },
        "options": {
            "en": [
                "Require a lot of room to change lanes.",
                "Are often wider than other vehicles. ",
                "Tend to sway from time to time."
            ],
            "ru": [
                "Требуют много места для перестроения.",
                "Часто шире других транспортных средств. ",
                "Тенденция к качанию со временем."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.7.3 - Space to the Sides\nCommercial vehicles are often wide and take up most of a lane. Safe drivers will manage what little space they have. You can do this by keeping your vehicle centered in your lane, and avoid driving alongside others.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.7.3 - Пространство по сторонам\nКоммерческие транспортные средства часто широкие и занимают большую часть полосы движения. Осторожные водители будут управлять своим транспортным средством в ограниченном пространстве. Вы можете сделать это, поддерживая ваше транспортное средство по центру полосы и избегая езды рядом с другими.",
                "",
            ]
        }
    },

    {
        "id": 121,
        "text": {
            "en": "You should lightly apply your brakes to flash the brake lights if:",
            "ru": "Вы должны слегка нажать на тормоза, чтобы мигать стоп-сигналами, если:",
        },
        "options": {
            "en": [
                "A driver tailgates your vehicle.",
                "You are about to exit the road and need to slow down. ",
                "A police car is approaching you from the other direction."
            ],
            "ru": [
                "Водитель едет слишком близко за вами.",
                "Вы собираетесь выехать с дороги и вам нужно замедлиться. ",
                "Полицейская машина приближается к вам с противоположного направления."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.5.1 - Signal Your Intentions\nWarn drivers behind you when you see you will need to slow down. A few light taps on the brake pedal, enough to flash the brake lights, should warn following drivers.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.5.1 - Сигнализирование о намерениях\nПредупреждайте водителей, следящих за вами, когда видите, что вам нужно будет замедлиться. Несколько легких нажатий на тормоз, достаточно для мигания стоп-сигналами, должны предупредить следующих за вами водителей.",
                "",
            ]
        }
    },

    {
        "id": 122,
        "text": {
            "en": "Merging onto the road is safest if you:",
            "ru": "Наиболее безопасным способом слияния на дорогу является:",
        },
        "options": {
            "en": [
                "Bend over into the nearest lane so the other vehicles will give you room.",
                "Gain speed on the shoulder and then merge.",
                "Wait for a large enough gap in the traffic to enter the road. "
            ],
            "ru": [
                "Наклонитесь в ближайший ряд, чтобы другие транспортные средства уступили вам место.",
                "Разгоняйтесь на обочине, а затем вливайтесь в поток.",
                "Дождитесь достаточно большого промежутка в движении, чтобы въехать на дорогу. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.7.7 - Space Needed to Cross or Enter Traffic\nBecause of slow acceleration and the space large vehicles require, you may need a much larger gap to enter traffic than you would in a car.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.7.7 - Необходимое пространство для пересечения или въезда на дорогу\nИз-за медленного разгона и пространства, необходимого большим транспортным средствам, вам может потребоваться гораздо больший промежуток для въезда в поток, чем вам бы потребовалось на автомобиле.",
            ]
        }
    },

    {
        "id": 123,
        "text": {
            "en": "Which of these is NOT something you should do if your headlights are not working properly?",
            "ru": "Какое из следующих действий ВЫ НЕ должны предпринимать, если фары на вашем транспортном средстве работают неправильно?"
        },
        "options": {
            "en": [
                "Clean your headlights.",
                "Adjust headlights.",
                "Leave on your high beams. "
            ],
            "ru": [
                "Очистить фары.",
                "Отрегулировать фары.",
                "Оставить включенными дальний свет фар. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.11.4 - Vehicle Factors\nDirty headlights may give only half the light they should. This cuts down your ability to see, and makes it harder for others to see you. Headlights can be out of adjustment. If they do not point in the right direction, they will not give you a good view and they can blind other drivers.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.11.4 - Факторы транспортного средства\nГрязные фары могут давать только половину света, который им следует. Это снижает вашу способность видеть и затрудняет видимость вас другим. Фары могут быть не отрегулированы. Если они не смотрят в нужном направлении, они не дадут вам хорошего обзора и могут ослепить других водителей.",
            ]
        }
    },

    {
        "id": 124,
        "text": {
            "en": "Which of the statements about backing a heavy vehicle is NOT true?",
            "ru": "Какое из утверждений о заднем ходе тяжелого транспортного средства НЕ является истинным?"
        },
        "options": {
            "en": [
                "You should back and turn toward the driver's side whenever it is possible.",
                "Because you cannot see, you should back slowly until you slightly bump into the dock. ",
                "You should use a helper and communicate with him with hand signals."
            ],
            "ru": [
                "Вы должны двигаться назад и поворачивать на сторону водителя, когда это возможно.",
                "Поскольку вы не видите, вы должны медленно двигаться назад, пока не слегка ударите в док. ",
                "Вы должны использовать помощника и общаться с ним с помощью жестов."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.2.4 - Backing Safely\nBacking safety rules list items: Back and turn toward the drivers side whenever possible. Use a helper whenever possible.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.2.4 - Безопасность заднего хода\nПравила безопасности заднего хода перечисляют пункты: Двигайтесь назад и поворачивайтесь на сторону водителя при каждой возможности. Используйте помощника всегда, когда это возможно.",
                "",
            ]
        }
    },

    {
        "id": 125,
        "text": {
            "en": "The distance that you should look ahead of your vehicle while driving is about __at low speed.",
            "ru": "Расстояние, на которое вы должны смотреть вперед от своего транспортного средства при движении с низкой скоростью, составляет около __."
        },
        "options": {
            "en": [
                "1 block ",
                "1/2 block",
                "2 blocks"
            ],
            "ru": [
                "1 блок ",
                "1/2 блока",
                "2 блока"
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.4.1 - Seeing Ahead\nMost good drivers look at least 12 to 15 seconds ahead. That means looking ahead the distance you will travel in 12 to 15 seconds. At lower speeds, that's about one block.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.4.1 - Обзор вперед\nБольшинство хороших водителей смотрят вперед как минимум на 12-15 секунд вперед. Это означает смотреть на расстояние, которое вы проедете за 12-15 секунд. При более низких скоростях это примерно один блок.",
                "",
                "",
            ]
        }
    },

    {
        "id": 126,
        "text": {
            "en": "Which of these is correct about emergency or evasive action?",
            "ru": "Какое из следующих утверждений верно относительно чрезвычайных или уклоняющихся действий?"
        },
        "options": {
            "en": [
                "In order to turn quickly you must have a firm grip on the steering wheel. ",
                "You can stop more quickly than you can turn to miss obstacles.",
                "Stopping is always the safest thing to do in a traffic emergency."
            ],
            "ru": [
                "Чтобы быстро повернуть, вы должны крепко удерживать руль. ",
                "Вы можете остановиться быстрее, чем повернуть, чтобы избежать препятствий.",
                "Остановка всегда самое безопасное действие в аварийной ситуации."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.17.1 - Steering to Avoid a Crash\nIn order to turn quickly, you must have a firm grip on the steering wheel with both hands. The best way to have both hands on the wheel, if there is an emergency, is to keep them there all the time.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17.1 - Управление для избежания столкновения\nЧтобы быстро повернуть, вы должны крепко держать руль обеими руками. Самый лучший способ держать обе руки на руле в случае чрезвычайной ситуации - держать их там постоянно.",
                "",
                "",
            ]
        }
    },

    {
        "id": 127,
        "text": {
            "en": "What does emergency braking mean?",
            "ru": "Что означает аварийное торможение?"
        },
        "options": {
            "en": [
                "Pushing down pedal and turning sharply.",
                "Pushing down the brake pedal as hard as you can.",
                "Responding to a hazard by slowing the vehicle. "
            ],
            "ru": [
                "Нажатие на педаль и резкое поворот.",
                "Нажатие на тормозную педаль максимально сильно.",
                "Реагирование на опасность путем замедления транспортного средства. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.17.2 - Emergency Braking: How to Stop Quickly and Safely\nEmergency braking does not mean pushing down on the brake pedal as hard as you can. That will only keep the wheels locked up and cause a skid. If the wheels are skidding, you cannot control the vehicle. Emergency braking means 'responding to a hazard by slowing the vehicle.'",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.17.2 - Аварийное торможение: Как быстро и безопасно остановиться\nАварийное торможение не означает нажатие на тормозную педаль максимально сильно. Это только сохранит колеса заблокированными и вызовет занос. Если колеса заносят, вы не можете контролировать транспортное средство. Аварийное торможение означает 'реагирование на опасность путем замедления транспортного средства.'",
            ]
        }
    },

    {
        "id": 128,
        "text": {
            "en": "When driving in cold weather your tire tread should:",
            "ru": "При движении в холодную погоду протектор ваших шин должен:"
        },
        "options": {
            "en": [
                "Provide enough traction to push the rig over wet pavement and through snow. ",
                "Be checked every one-hundred miles or every 2 hours.",
                "Be double the depth required in normal weather."
            ],
            "ru": [
                "Обеспечивать достаточное сцепление для перемещения автомобиля по мокрому покрытию и сквозь снег. ",
                "Проверяться каждые сто миль или каждые 2 часа.",
                "Быть вдвое глубже, чем требуется в нормальной погоде."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.13.1 - Vehicle Checks\nMake sure you have enough tread on your tires. The drive tires must provide traction to push the rig over wet pavement and through snow.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.13.1 - Проверки транспортного средства\nУбедитесь, что у вас достаточно протектора на шинах. Приводные шины должны обеспечивать сцепление для перемещения автомобиля по мокрому покрытию и сквозь снег.",
                "",
                "",
            ]
        }
    },

    {
        "id": 129,
        "text": {
            "en": "Which of these is true about hauling hazardous materials?",
            "ru": "Какое из следующих утверждений верно относительно перевозки опасных материалов?"
        },
        "options": {
            "en": [
                "Cylinders with compressed gases should be transported under covers if there is no label on them.",
                "Containers should be marked with four-inch diamond-shaped hazard labels. ",
                "Such a load should be marked with a four-inch circle, red colored labels on the containers."
            ],
            "ru": [
                "Баллоны с сжатыми газами должны перевозиться под покровом, если на них нет этикетки.",
                "Контейнеры следует маркировать четырехдюймовыми ромбовидными опасными этикетками. ",
                "Такую нагрузку следует маркировать красными этикетками с круглым диаметром в четыре дюйма на контейнерах."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.23.2 - Why Are There Rules?\nThe shipper uses a shipping paper and diamond-shaped hazard labels to warn dockworkers and drivers of the risk. Shipping orders, bills of lading, and manifests are all examples of shipping papers. The shipping paper describes the hazardous materials being transported. Shippers put diamond-shaped hazard warning labels on most hazardous materials packages to inform others of the hazard. If the diamond label will not fit on the container, shippers put the label on a tag. For example, compressed gas cylinders that will not hold a label will have tags or decals.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.23.2 - Почему есть правила?\nОтправитель использует документ перевозки и ромбовидные этикетки опасности, чтобы предупредить рабочих на доке и водителей о риске. Документы перевозки, коносаменты и манифесты - все это примеры документов перевозки. Документ перевозки описывает опасные материалы, которые перевозятся. Отправители наклеивают ромбовидные этикетки опасности на большинство упаковок с опасными материалами, чтобы предупредить других о риске. Если ромбовидная этикетка не помещается на контейнере, отправители кладут этикетку на ярлык. Например, баллоны с сжатыми газами, на которых нельзя разместить этикетку, будут иметь ярлыки или наклейки.",
                "",
            ]
        }
    },

    {
        "id": 130,
        "text": {
            "en": "Which vehicle will have the most difficulty staying in its lane during strong wind?",
            "ru": "Какое транспортное средство будет иметь наибольшие трудности с оставанием в своей полосе при сильном ветре?"
        },
        "options": {
            "en": [
                "A tractor pulling a loaded flatbed trailer.",
                "A triple axle vehicle with cargo.",
                "A double with an empty trailer. "
            ],
            "ru": [
                "Тягач с прицепом с грузом на платформе.",
                "Трехосное транспортное средство с грузом.",
                "Тягач с двумя пустыми прицепами. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.7.3 - Space to the Sides\nStrong winds make it difficult to stay in your lane. The problem is usually worse for lighter vehicles. This problem can be especially bad coming out of tunnels. Don't drive alongside others if you can avoid it.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.7.3 - Пространство по сторонам\nСильные ветры затрудняют оставаться в полосе движения. Проблемы обычно хуже для более легких транспортных средств. Эта проблема может быть особенно серьезной при выезде из туннелей. Старайтесь избегать движения рядом с другими транспортными средствами, если это возможно.",
            ]
        }
    },

    {
        "id": 131,
        "text": {
            "en": "Why does vehicle speed naturally increase on a downgrade?",
            "ru": "Почему скорость автомобиля естественно увеличивается на спуске?"
        },
        "options": {
            "en": [
                "The engine runs smoother.",
                "Lack of traction.",
                "Gravity. "
            ],
            "ru": [
                "Двигатель работает плавнее.",
                "Отсутствие сцепления.",
                "Гравитация. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.16 - Mountain Driving\nIn mountain driving, gravity plays a major role. On any upgrade, gravity slows you down. The steeper the grade, the longer the grade, and/ or the heavier the load, the more you will have to use lower gears to climb hills or mountains. In coming down long, steep downgrades, gravity causes the speed of your vehicle to increase.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.16 - Подъемы и спуски в горах\nВ горных условиях вождения гравитация играет большую роль. На любом подъеме гравитация замедляет вас. Чем круче подъем, чем длиннее подъем или чем тяжелее нагрузка, тем больше вам придется использовать более низкие передачи для подъема на холмах или горах. Во время спуска по длинным, крутым спускам гравитация вызывает увеличение скорости вашего транспортного средства.",
            ]
        }
    },

    {
        "id": 132,
        "text": {
            "en": "During the vehicle inspection, checking of __will NOT prevent a fire.",
            "ru": "Во время осмотра транспортного средства проверка чего из перечисленного НЕ помешает пожару?"
        },
        "options": {
            "en": [
                "Electrical system isolation",
                "Cargo ventilation",
                "Battery fluid level "
            ],
            "ru": [
                "Изоляция электрической системы",
                "Вентиляция груза",
                "Уровень электролита в батарее "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.21.1 - Causes of Fire\nPlease read the list of causes of vehicle fires. Battery fluid level is not a listed item.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.21.1 - Причины пожаров\nПожалуйста, прочитайте список причин возникновения пожаров в транспортных средствах. Уровень электролита в батарее не является перечисленным пунктом.",
            ]
        }
    },

    {
        "id": 133,
        "text": {
            "en": "When is it necessary to learn how a fire extinguisher works?",
            "ru": "Когда необходимо изучить, как работает огнетушитель?"
        },
        "options": {
            "en": [
                "Only when the fire happens.",
                "Only when you are transporting flammable materials.",
                "Before the fire happens. "
            ],
            "ru": [
                "Только когда происходит пожар.",
                "Только когда вы транспортируете воспламеняющиеся материалы.",
                "Перед тем как пожар произойдет. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.21.3 - Fire Fighting\nKnowing how to fight fires is important. Drivers who did not know what to do have made fires worse. Know how the fire extinguisher works. Study the instructions printed on the extinguisher before you need it.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.21.3 - Тушение пожаров\nЗнание того, как тушить пожары, важно. Водители, которые не знали, что делать, только усугубляли пожары. Знайте, как работает огнетушитель. Изучите инструкции, напечатанные на огнетушителе, прежде чем вам понадобится его использовать.",
            ]
        }
    },

    {
        "id": 134,
        "text": {
            "en": "What is the most important reason to inspect your truck or bus?",
            "ru": "Какая самая важная причина проверки вашего грузовика или автобуса?"
        },
        "options": {
            "en": [
                "To avoid being cited.",
                "It's the law.",
                "Safety. "
            ],
            "ru": [
                "Избежать штрафа.",
                "Это закон.",
                "Безопасность. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.1.1 - Why Inspect\nSafety is the most important reason you inspect your vehicle, safety for yourself and for other road users.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.1 - Почему проводить проверку\nБезопасность - самая важная причина проверки вашего транспортного средства, безопасность для вас и других участников дорожного движения.",
            ]
        }
    },

    {
        "id": 135,
        "text": {
            "en": "You are checking your steering and exhaust system in a pre-trip inspection. Which of these problems, if found, should be fixed before the vehicle is driven?",
            "ru": "Вы проверяете систему управления и выхлопную систему во время предварительного осмотра. Какие из этих проблем, если обнаружены, следует устранить перед тем как начать движение?"
        },
        "options": {
            "en": [
                "Oil on a tire rod.",
                "If a gray smoke is coming out from the exhaust pipe.",
                "Steering wheel play of more than 10 degrees (2 inches on 20 inches steering wheel). "
            ],
            "ru": [
                "Масло на шарнире тяги.",
                "Если из выхлопной трубы идет серый дым.",
                "Люфт рулевого колеса более 10 градусов (2 дюйма на 20-дюймовом рулевом колесе). "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.1.3 - What to Look For\nSteering wheel play of more than 10 degrees (approximately 2 inches movement at the rim of a 20-inch steering wheel) can make it hard to steer.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.3 - Что искать\nЛюфт рулевого колеса более 10 градусов (приблизительно 2 дюйма движения на ободе 20-дюймового рулевого колеса) может затруднить управление.",
            ]
        }
    },

    {
        "id": 136,
        "text": {
            "en": "Convex (curved) mirrors:",
            "ru": "Выпуклые (огнутые) зеркала:"
        },
        "options": {
            "en": [
                "They show a wider area than flat mirrors show. ",
                "Make objects appear closer than they really are.",
                "Make objects appear larger than they really are."
            ],
            "ru": [
                "Они показывают широкую область по сравнению с плоскими зеркалами. ",
                "Делают объекты ближе, чем они есть на самом деле.",
                "Заставляют объекты казаться больше, чем они есть на самом деле."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.4.2 - Seeing to the Sides and Rear\nMany large vehicles have curved mirrors that show a wider area than flat mirrors. This is often helpful. But everything appears smaller in a convex mirror than it would if you were looking at it directly. Things also seem farther away than they really are. It's important to realize this and to allow for it.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.4.2 - Видимость по бокам и сзади\nМногие большие транспортные средства имеют выпуклые зеркала, которые показывают более широкую область, чем плоские зеркала. Это часто бывает полезно. Но в выпуклом зеркале все кажется меньше, чем оно было бы, если бы вы смотрели на это напрямую. Вещи также кажутся дальше, чем они есть на самом деле. Важно это понимать и учитывать.",
                "",
                "",
            ]
        }
    },

    {
        "id": 137,
        "text": {
            "en": "Why is it important to shift gears correctly?",
            "ru": "Почему важно переключать передачи правильно?"
        },
        "options": {
            "en": [
                "To keep control of the vehicle. ",
                "To keep the engine warm.",
                "To keep the engine oil flowing."
            ],
            "ru": [
                "Чтобы сохранить управление транспортным средством. ",
                "Чтобы поддерживать тепло двигателя.",
                "Чтобы обеспечивать циркуляцию моторного масла."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.3 - Shifting Gears\nCorrect shifting of gears is important. If you can't get your vehicle into the right gear while driving, you will have less control.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.3 - Переключение передач\nПравильное переключение передач важно. Если вы не сможете переключить свое транспортное средство на правильную передачу во время движения, у вас будет меньше контроля.",
                "",
                "",
            ]
        }
    },

    {
        "id": 138,
        "text": {
            "en": "What three distances build up the total stopping distance of your truck or bus?",
            "ru": "Три расстояния, которые формируют общее расстояние торможения вашего грузовика или автобуса?"
        },
        "options": {
            "en": [
                "Respond distance, observation distance, and braking distance.",
                "Attention distance, reaction distance, and slowing distance.",
                "Perception distance, reaction distance, and braking distance. "
            ],
            "ru": [
                "Расстояние реакции, расстояние наблюдения и расстояние торможения.",
                "Расстояние внимания, расстояние реакции и расстояние замедления.",
                "Расстояние восприятия, расстояние реакции и расстояние торможения. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.6.1 - Stopping Distance\nPerception Distance + Reaction Distance + Braking Distance = Total Stopping Distance",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.6.1 - Расстояние торможения\nРасстояние восприятия + Расстояние реакции + Расстояние торможения = Общее расстояние торможения",
            ]
        }
    },

    {
        "id": 139,
        "text": {
            "en": "Which of these actions are NOT recommended for a left turn?",
            "ru": "Какие из этих действий НЕ рекомендуются при левом повороте?"
        },
        "options": {
            "en": [
                "Start at the inside lane and swing right as you turn. ",
                "Start your turn in the center of the intersection.",
                "Use a right-hand turn lane if there are two turning lanes."
            ],
            "ru": [
                "Начните с внутренней полосы и развернитесь вправо во время поворота. ",
                "Начните поворот в центре перекрестка.",
                "Используйте правую полосу для поворота, если есть две полосы для поворота."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.7.6 - Space for Turns\nOn a left turn, make sure you have reached the center of the intersection before you start the left turn. If you turn too soon, the left side of your vehicle may hit another vehicle because of off-tracking. If there are two left- turn lanes, always select the outside left-turn lane. Do not start in the inside left-turn lane, because you might have to swing wide to make the turn; then you would have to watch for anyone coming alongside you in the lane to your right, where your ability to see is limited. Drivers on your left can be more readily seen.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.7.6 - Пространство для поворотов\nПри левом повороте убедитесь, что вы достигли центра перекрестка, прежде чем начнете левый поворот. Если вы повернете слишком рано, левая сторона вашего транспортного средства может столкнуться с другим транспортным средством из-за отслеживания. Если есть две полосы для левого поворота, всегда выбирайте внешнюю полосу для левого поворота. Не начинайте во внутренней полосе для левого поворота, потому что вам может потребоваться развернуться широко, чтобы совершить поворот; в таком случае вам придется следить за тем, кто едет рядом с вами в полосе справа, где ваша способность видеть ограничена. Водителей слева можно более легко заметить.",
                "",
                "",
            ]
        }
    },

    {
        "id": 140,
        "text": {
            "en": "When you are passing a vehicle, pedestrian, or bicycle you should assume that:",
            "ru": "Когда вы обгоняете транспортное средство, пешехода или велосипедиста, вы должны предполагать, что:"
        },
        "options": {
            "en": [
                "They may be moving to your traffic lane. ",
                "They see your vehicle.",
                "They know you are to pass."
            ],
            "ru": [
                "Они могут двигаться к вашей полосе движения. ",
                "Они видят ваше транспортное средство.",
                "Они знают, что вы собираетесь выполнить обгон."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.8.3 - Drivers Who Are Hazards\nVehicles may be partly hidden by blind intersections or alleys. If you only can see the rear or front end of a vehicle but not the driver, then he or she cannot see you. Be alert because he/she may back out or enter into your lane. Always be prepared to stop. Walkers, joggers, and bicyclists may be on the road with their back to the traffic, so they cannot see you. Sometimes they wear portable stereos with headsets, so they cannot hear you either. This can be dangerous. On rainy days, pedestrians may not see you because of hats or umbrellas. They may be hurrying out of the rain and may not pay attention to the traffic.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.8.3 - Водители, представляющие опасность\nТранспортные средства могут быть частично скрыты слепыми перекрестками или переулками. Если вы видите только заднюю или переднюю часть транспортного средства, но не водителя, значит, он или она не видит вас. Будьте бдительны, потому что он/она может двигаться назад или въезжать на вашу полосу. Всегда будьте готовы к остановке. Пешеходы, бегуны и велосипедисты могут быть на дороге спиной к потоку трафика, поэтому они не видят вас. Иногда они используют портативные стереоустройства с наушниками, поэтому они также не слышат вас. Это может быть опасно. В дождливые дни пешеходы могут не видеть вас из-за шляп или зонтиков. Они могут спешить избегать дождя и не обращать внимания на трафик.",
                "",
                "",
            ]
        }
    },

    {
        "id": 141,
        "text": {
            "en": "When merging:",
            "ru": "При слиянии:"
        },
        "options": {
            "en": [
                "Use your mirrors to make sure the gap in traffic is large enough for you to enter safely. ",
                "Assume other drivers will allow you to merge.",
                "Check your mirrors to make sure the rear of your vehicle will not hit anything."
            ],
            "ru": [
                "Используйте зеркала, чтобы убедиться, что разрыв в потоке трафика достаточно большой для безопасного включения. ",
                "Предполагайте, что другие водители позволят вам влиться.",
                "Проверьте ваши зеркала, чтобы убедиться, что задняя часть вашего транспортного средства никуда не ударится."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.4.2 - Seeing to the Sides and Rear\nMerges: When merging, use your mirrors to make sure the gap in traffic is large enough for you to enter safely.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.4.2 - Обзор сбоку и сзади\nСлияние: При слиянии используйте зеркала, чтобы убедиться, что разрыв в потоке трафика достаточно большой для безопасного включения.",
                "",
                "",
            ]
        }
    },

    {
        "id": 142,
        "text": {
            "en": "Which of these is the proper signal to change lanes?",
            "ru": "Какой из этих сигналов является правильным для перестроения на другую полосу?"
        },
        "options": {
            "en": [
                "Signal before the change and move over quickly.",
                "Signal after you begin the change and cross over slowly.",
                "Signal early and change lanes slowly and smoothly. "
            ],
            "ru": [
                "Давать сигнал перед перестроением и быстро перестраиваться.",
                "Давать сигнал после начала перестроения и медленно пересекать полосу.",
                "Давать сигнал заранее и плавно перестраиваться на другую полосу. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.5.1 - Signal Your Intentions\nLane Changes: Put your turn signal on before changing lanes. Change lanes slowly and smoothly. That way a driver you did not see may have a chance to honk his/her horn, or avoid your vehicle.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.5.1 - Сигнализируйте о своих намерениях\nПерестроение на другие полосы: Включите поворотный сигнал перед перестроением на другую полосу. Перестраивайтесь на другую полосу медленно и плавно. Таким образом, водитель, которого вы не видите, может успеть вовремя заблаговременно подать сигнал сигналом, или избежать столкновения с вашим транспортным средством.",
            ]
        }
    },

    {
        "id": 143,
        "text": {
            "en": "You are driving in an area with few streetlights, if you cannot see well with your headlights, which of the following actions may help:",
            "ru": "Вы водите в районе с недостаточным количеством уличных фонарей. Если вы плохо видите с вашими фарами, какое из следующих действий может помочь:"
        },
        "options": {
            "en": [
                "Find another route that is better lit, even if it is out of your way.",
                "Use your high beams when legal and keep your interior lights off. ",
                "Turn your interior lights on and adjust your instrument lights."
            ],
            "ru": [
                "Найти другой путь, который более хорошо освещен, даже если это отвлечет вас от маршрута.",
                "Использовать дальний свет, когда это разрешено, и не включать внутренние огни. ",
                "Включить внутренние огни и настроить подсветку приборов."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Explanation: Section: 2.11.5 - Night Driving Procedures\nUse High Beams When You Can. Some drivers make the mistake of always using low beams. This seriously cuts down on their ability to see ahead. Use high beams when it is safe and legal to do so.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.11.5 - Процедуры ночной езды\nИспользуйте дальний свет, когда это возможно. Некоторые водители делают ошибку, всегда используя ближний свет. Это серьезно снижает их способность видеть вперед. Используйте дальний свет, когда это безопасно и разрешено.",
                "",
            ]
        }
    },

    {
        "id": 144,
        "text": {
            "en": "Most serious skids result from:",
            "ru": "Большинство серьезных заносов происходят из-за:"
        },
        "options": {
            "en": [
                "An uneven load.",
                "Turning too sharply.",
                "Driving too fast for conditions. "
            ],
            "ru": [
                "Неравномерной нагрузки.",
                "Слишком резкого поворота.",
                "Слишком высокой скорости движения при неблагоприятных условиях. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Explanation: Section: 2.19 - Skid Control and Recovery\nMost serious skids result from driving too fast for road conditions. Drivers who adjust their driving to conditions don't over-accelerate and don't have to over-brake or over-steer from too much speed.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.19 - Управление и восстановление при заносе\nБольшинство серьезных заносов происходят из-за слишком высокой скорости движения при неблагоприятных дорожных условиях. Водители, адаптирующие свое вождение к условиям, не переускоряются и не нуждаются в чрезмерном применении тормозов или рулевого воздействия из-за излишней скорости.",
            ]
        }
    },

    {
        "id": 145,
        "text": {
            "en": "What should be true about other drivers:",
            "ru": "Что должно быть верным относительно других водителей:"
        },
        "options": {
            "en": [
                "Short-term or daily rental truck drivers are often not used to the limited vision, which makes these drivers a hazard. ",
                "Drivers who use turn signals should always be trusted to turn towards the signaled direction.",
                "Mail or delivery trucks are professionals and do not pose a hazard."
            ],
            "ru": [
                "Водители грузовиков короткосрочной или ежедневной аренды часто не привыкли к ограниченной видимости, что делает их опасными. ",
                "Водителям, использующим поворотные сигналы, всегда следует доверять и поворачивать в указанном направлении.",
                "Почтовые или грузовые автомобили - профессионалы и не представляют опасности."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.8.3 - Drivers Who Are Hazards\nRental trucks should be watched carefully.\nTheir drivers are often not used to the limited\nvision they have to the sides and rear of the truck.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.8.3 - Водители, которые представляют опасность\nГрузовики короткосрочной или ежедневной аренды следует наблюдать бдительно. Их водители часто не привыкли к ограниченной видимости, которая есть на боках и задней части грузовика.",
                "",
                "",
            ]
        }
    },

    {
        "id": 146,
        "text": {
            "en": "What is true about bad weather and driving conditions?",
            "ru": "Что верно относительно плохой погоды и условий вождения?"
        },
        "options": {
            "en": [
                "When the temperature drops, the bridges freeze before the road. ",
                "Driving conditions become more dangerous when the temperature rises above freezing.",
                "The road is more slippery when the rain continues than when rain begins."
            ],
            "ru": [
                "Когда температура падает, мосты замерзают раньше дороги. ",
                "Условия вождения становятся более опасными, когда температура поднимается выше нуля.",
                "Дорога более скользкая, когда дождь продолжается, чем когда дождь только начинается."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.6.2 - Matching Speed to the Road Surface\nWhen the temperature drops, bridges will freeze before the road will. Be especially careful when the temperature is close to 32 degrees Fahrenheit.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6.2 - Согласование скорости с дорожной поверхностью\nКогда температура падает, мосты замерзнут раньше, чем дорога. Будьте особенно осторожны, когда температура близка к 32 градусам по Фаренгейту.",
                "",
                "",
            ]
        }
    },

    {
        "id": 147,
        "text": {
            "en": "Which of these statements about the hazard of vehicle fire is true?",
            "ru": "Какое из утверждений о риске возникновения пожара в автомобиле верно?"
        },
        "options": {
            "en": [
                "Poor cargo ventilation may cause cargo to catch on fire. ",
                "Underinflated tires cannot cause a vehicle fire.",
                "Carrying a fully charged fire extinguisher may prevent a fire."
            ],
            "ru": [
                "Недостаточная вентиляция груза может вызвать возгорание груза. ",
                "Недостаточное давление в шинах не может вызвать пожар в автомобиле.",
                "Наличие полностью заряженного огнетушителя может предотвратить пожар."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Explanation: Section: 2.21.1 - Causes of Fire\nCargo: Flammable cargo, improperly sealed or loaded cargo, poor ventilation",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.21.1 - Причины возникновения пожара\nГруз: Горючий груз, неправильно запечатанный или загруженный груз, недостаточная вентиляция",
                "",
                "",
            ]
        }
    },

    {
        "id": 148,
        "text": {
            "en": "You should wear a seat belt in a moving vehicle:",
            "ru": "Вы должны надевать ремень безопасности в движущемся автомобиле:"
        },
        "options": {
            "en": [
                "All the time. ",
                "Only when you are driving.",
                "Only when you are on a highway."
            ],
            "ru": [
                "Всегда. ",
                "Только когда вы водите.",
                "Только когда вы находитесь на автостраде."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.2 - Basic Control of Your Vehicle\nFasten your seat belt when on the road. Apply the parking brake when you leave your vehicle.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.2 - Основное управление вашим автомобилем\nЗастегивайте ремень безопасности, находясь на дороге. Припаркуйте автомобиль, покидая его.",
                "",
                "",
            ]
        }
    },

    {
        "id": 149,
        "text": {
            "en": "Which of these items is NOT checked for a pre-trip inspection?",
            "ru": "Какой из этих пунктов НЕ проверяется во время предпоездочного осмотра?"
        },
        "options": {
            "en": [
                "Cargo securement.",
                "Whether all lights are working.",
                "Amount of fuel in a vehicle. "
            ],
            "ru": [
                "Крепление груза.",
                "Работоспособность всех фар.",
                "Уровень топлива в транспортном средстве. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.1.5 - Seven-step Inspection Method\nReview Step 2: Check Engine Compartment.\nFuel level is not an item to check for.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.5 - Метод семи шагов для осмотра\nПосмотрите на Шаг 2: Проверка отсека двигателя.\nУровень топлива - это не предмет для проверки.",
            ]
        }
    },

    {
        "id": 150,
        "text": {
            "en": "Which of the statements about a pre-trip inspection is true?",
            "ru": "Какое из утверждений о предпоездочной проверке верно?"
        },
        "options": {
            "en": [
                "Leave the key in the ignition so you do not lose it when you are under the truck.",
                "If you need to tilt the cab, secure loose items so that they cannot fall or break anything. ",
                "When you park on a street, you should walk so you face away from oncoming traffic."
            ],
            "ru": [
                "Оставьте ключ в замке зажигания, чтобы не потерять его, когда вы находитесь под грузовиком.",
                "Если вам нужно наклонить кабину, закрепите свободные предметы так, чтобы они не могли упасть или что-либо сломать. ",
                "При парковке на улице вы должны идти так, чтобы лицом поворачиваться от движущегося трафика."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.1.5 - Seven Step Inspection Method\nYou may have to raise the hood, tilt the cab\n(secure loose things so they don't fall and\nbreak something), or open the engine\ncompartment door.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.1.5 - Метод семи шагов для осмотра\nВам может потребоваться поднять капот, наклонить кабину (закрепите свободные предметы, чтобы они не упали и не разбили что-либо), или открыть дверцу отсека двигателя.",
                "",
            ]
        }
    },

    {
        "id": 151,
        "text": {
            "en": "Can state inspectors inspect your truck or bus?",
            "ru": "Могут ли государственные инспекторы проверить ваш грузовик или автобус?"
        },
        "options": {
            "en": [
                "Yes, and they can put you out of service if unsafe. ",
                "No.",
                "Yes, but cannot put you out of service."
            ],
            "ru": [
                "Да, и они могут запретить вам дальнейшее движение, если обнаружат небезопасные условия. ",
                "Нет.",
                "Да, но они не могут запретить вам дальнейшее движение."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.1.1 - Why Inspect\nFederal and state laws require that drivers inspect their vehicles. Federal and state inspectors also may inspect your vehicles. If they judge the vehicle to be unsafe, they will put it \"out of service\" until it is fixed.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.1.1 - Почему проверять\nФедеральные и штатные законы требуют, чтобы водители проверяли свои транспортные средства. Федеральные и штатные инспекторы также могут проверять ваши транспортные средства. Если они считают транспортное средство небезопасным, они запретят его движение до устранения неисправностей.",
                "",
                "",
            ]
        }
    },

    {
        "id": 152,
        "text": {
            "en": "Which of these statements about cargo loading is true?",
            "ru": "Какое из следующих утверждений о погрузке груза верно?"
        },
        "options": {
            "en": [
                "The legal maximum weight allowed by the state is considered safe for all driving conditions.",
                "If cargo is loaded by the shipper, a driver is not responsible for its load.",
                "A state law dictates legal weight limit. "
            ],
            "ru": [
                "Максимально допустимый вес по законам штата считается безопасным для всех условий вождения.",
                "Если груз загружен отправителем, водитель не несет ответственности за его погрузку.",
                "Закон штата определяет лимит по допустимому весу. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 3.2.2 - Legal Weight Limits\nYou must keep weights within legal limits. States have maximums for GVWRS, GCWRs, and axle weights. Often, maximum axle weights are set by a bridge formula. A bridge formula permits less maximum axle weight for axles that are closer together. This is to prevent overloading bridges and roadways.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 3.2.2 - Легальные грузовые ограничения\nВы должны соблюдать допустимые лимиты веса. Штаты устанавливают максимальные значения для GVWRS, GCWRs и веса осей. Часто максимальные веса осей устанавливаются с помощью мостовой формулы. Формула моста устанавливает меньший максимальный вес оси для осей, которые находятся ближе друг к другу. Это сделано для предотвращения перегрузки мостов и дорог.",
            ]
        }
    },

    {
        "id": 153,
        "text": {
            "en": "Which of these is not required knowledge for drivers seeking a hazardous material endorsement?",
            "ru": "Какое из следующих утверждений не является необходимым знанием для водителей, ищущих удостоверение на перевозку опасных материалов?"
        },
        "options": {
            "en": [
                "When to use the placards.",
                "Which products can be loaded together.",
                "Basic chemistry. "
            ],
            "ru": [
                "Когда использовать плакаты.",
                "Какие продукты можно грузить вместе.",
                "Основы химии. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 9.1.3 - Assure Safe Drivers and Equipment\nTo pass the test, you must know how to: Identify what are hazardous materials, safely load shipments, properly placard your vehicle, and safely transport shipments.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 9.1.3 - Обеспечение безопасности водителей и оборудования\nЧтобы сдать экзамен, вам необходимо знать, как: определять, что такое опасные материалы, безопасно загружать грузы, правильно наносить плакаты на ваше транспортное средство и безопасно перевозить грузы.",
            ]
        }
    },

    {
        "id": 154,
        "text": {
            "en": "To determine blood alcohol concentration level for a person, it is necessary to know:",
            "ru": "Для определения уровня концентрации алкоголя в крови у человека необходимо знать:"
        },
        "options": {
            "en": [
                "Their weight. ",
                "Their age.",
                "How often they drink alcohol."
            ],
            "ru": [
                "Их вес. ",
                "Их возраст.",
                "Как часто они употребляют алкоголь."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.22.1 - Alcohol and Driving\nBAC is determined by the amount of alcohol you drink (more alcohol means higher BAC), how fast you drink (faster drinking means higher BAC), and your weight (a small person doesn't have to drink as much to reach the same BAC).",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.22.1 - Алкоголь и вождение\nУровень алкоголя в крови определяется количеством выпитого вами алкоголя (больше алкоголя означает более высокий уровень алкоголя в крови), скоростью его употребления (более быстрое употребление означает более высокий уровень алкоголя в крови) и вашим весом (у маленького человека не обязательно выпивать так много, чтобы достичь того же уровня алкоголя в крови).",
                "",
                "",
            ]
        }
    },

    {
        "id": 155,
        "text": {
            "en": "Implied consent means:",
            "ru": "Подразумеваемое согласие означает:"
        },
        "options": {
            "en": [
                "It is understood that you may drink alcohol now and then.",
                "You are giving your consent to inspect your vehicle for alcohol.",
                "You are giving your consent to be tested for alcohol in your blood. "
            ],
            "ru": [
                "Подразумевается, что вы иногда можете употреблять алкоголь.",
                "Вы даете свое согласие на проверку вашего автомобиля на наличие алкоголя.",
                "Вы даете свое согласие на тестирование на наличие алкоголя в вашей крови. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 1.3.2 - Alcohol, Leaving the Scene of an Accident\nIt is illegal to operate a CMV if your BAC is .04 percent or more. If you operate a CMV, you shall be deemed to have given your consent to alcohol testing.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 1.3.2 - Алкоголь, Покидание места аварии\nЗапрещено управлять грузовиком или автобусом, если ваш уровень алкоголя в крови составляет 0,04 процента или больше. Если вы управляете грузовиком или автобусом, вы считаетесь давшим согласие на тестирование на наличие алкоголя.",
            ]
        }
    },

    {
        "id": 156,
        "text": {
            "en": "The engine brake effect is greater when the engine is __governed RPM and the transmission is on a __gear.",
            "ru": "Эффект двигателя-тормоза больше, когда двигатель работает на __ограниченных оборотах, а трансмиссия находится на __передаче."
        },
        "options": {
            "en": [
                "Above, lower",
                "Below, higher",
                "Near, lower "
            ],
            "ru": [
                "Выше, ниже",
                "Ниже, выше",
                "Близко, ниже "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.16.1 - Select a Safe Speed\nYou must use the braking effect of the engine as the principal way of controlling your speed. The braking effect of the engine is greatest when it is near the governed rpms and the transmission is in the lower gears.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.16.1 - Выбор безопасной скорости\nВы должны использовать тормозной эффект двигателя как основной способ контроля вашей скорости. Тормозной эффект двигателя наиболее сильный, когда двигатель находится близко к ограниченным оборотам и трансмиссия находится в нижних передачах.",
            ]
        }
    },

    {
        "id": 157,
        "text": {
            "en": "You are driving a 40-foot vehicle at 55 mph. The road is dry, and visibility is good. What is the least amount of space that you need to have in front of your vehicle?",
            "ru": "Вы водите транспортное средство длиной 40 футов (около 12 метров) со скоростью 55 миль в час (около 88 км/ч). Дорога сухая, и видимость хорошая. Какое минимальное расстояние вам нужно иметь перед вашим транспортным средством?"
        },
        "options": {
            "en": [
                "4 seconds",
                "6 seconds",
                "5 seconds ",
            ],
            "ru": [
                "4 секунды",
                "6 секунд",
                "5 секунд ",
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.7.1 - Space Ahead\nHow much space should you keep in front of you? One good rule says you need at least one second for each 10 feet of vehicle length at speeds below 40 mph. At greater speeds, you must add 1 second for safety. For example, if you are driving a 40-foot vehicle, you should leave 4 seconds between you and the vehicle ahead. In a 60-foot rig, you'll need 6 seconds. Over 40 mph, you'd need 5 seconds for a 40-foot vehicle and 7 seconds for a 60-foot vehicle.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.7.1 - Расстояние впереди\nСколько места вам нужно оставить перед собой? Одно хорошее правило гласит, что вам нужно по крайней мере одну секунду на каждые 10 футов длины транспортного средства при скоростях ниже 40 миль в час. При более высоких скоростях вы должны добавить 1 секунду для безопасности. Например, если вы управляете транспортным средством длиной 40 футов, вам следует оставить 4 секунды между вами и транспортным средством впереди. Для грузовика длиной 60 футов вам понадобится 6 секунд. При скорости более 40 миль в час вам потребуется 5 секунд для транспортного средства длиной 40 футов и 7 секунд для транспортного средства длиной 60 футов.",
            ]
        }
    },

    {
        "id": 158,
        "text": {
            "en": "What should you do if a car coming toward you at night keeps its high beams on?",
            "ru": "Что вы должны сделать, если автомобиль, двигаясь навстречу вам ночью, не выключает дальний свет?"
        },
        "options": {
            "en": [
                "Slow down and look straight ahead in your lane.",
                "Look to the right lane or edge markings of the road ",
                "Flash your high beams quickly at the other driver"
            ],
            "ru": [
                "Замедлите и смотрите прямо вперед по своей полосе.",
                "Смотрите на правую полосу или краевые разметки дороги. ",
                "Быстро мигните дальним светом водителю другого автомобиля."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.11.5 - Night Driving Procedures\nDo not look directly at lights of oncoming vehicles. Look slightly to the right at a right lane or edge marking, if available. If other drivers don't put their low beams on, don't try to \"get back at them\" by putting your own high beams on. This increases glare for oncoming drivers and increases the chance of a crash.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.11.5 - Процедуры ночной езды\nНе смотрите прямо на фары встречных транспортных средств. Взгляните слегка вправо на правую полосу или краевую разметку, если она есть. Если другие водители не переключаются на ближний свет, не пытайтесь \"отомстить\" им, включая дальний свет. Это увеличивает ослепление для водителей, движущихся навстречу, и увеличивает риск аварии.",
                "",
            ]
        }
    },

    {
        "id": 159,
        "text": {
            "en": "If you must cross into the oncoming lane to make a turn, you should:",
            "ru": "Если вам нужно пересечь встречную полосу, чтобы повернуть, вы должны:"
        },
        "options": {
            "en": [
                "Back up to allow the oncoming traffic to pass.",
                "Watch for oncoming traffic.",
                "Complete your turn without stopping."
            ],
            "ru": [
                "Передвигаться назад, чтобы позволить встречному движению пройти.",
                "Осмотреть встречное движение. ",
                "Завершить поворот, не останавливаясь."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.7.6 - Space for Turns\nIf you must cross into the oncoming lane to make a turn, watch out for vehicles coming toward you. Give them room to go by or to stop. However, don't back up for them, because you might hit someone behind you.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.7.6 - Пространство для поворотов\nЕсли вам нужно пересечь встречную полосу, чтобы сделать поворот, будьте внимательны к транспортным средствам, движущимся навстречу. Оставьте им место для проезда или остановки. Тем не менее, не отступайте назад перед ними, потому что вы можете задеть кого-то сзади.",
                "",
            ]
        }
    },

    {
        "id": 160,
        "text": {
            "en": "Which of these is true about driving in a tunnel?",
            "ru": "Что из следующего верно относительно вождения в туннеле?"
        },
        "options": {
            "en": [
                "Headlights are required by law.",
                "There may be strong winds when exiting. ",
                "Emergency flashers are required by law."
            ],
            "ru": [
                "Фары обязательны по закону.",
                "При выезде из туннеля может быть сильный ветер. ",
                "Аварийные аварийные мигалки обязательны по закону."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.7.3 - Space to the Sides\nStrong winds make it difficult to stay in your lane. The problem is usually worse for lighter vehicles. This problem can be especially bad coming out of tunnels. Don't drive alongside others if you can avoid it.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.7.3 - Пространство по бокам\nСильные ветра затрудняют движение в вашей полосе. Проблемы обычно бывают хуже для более легких транспортных средств. Эта проблема может быть особенно серьезной при выезде из туннелей. Если возможно, избегайте движения рядом с другими транспортными средствами.",
                "",
            ]
        }
    },

    {
        "id": 161,
        "text": {
            "en": "You should use your horn when:",
            "ru": "Вы должны использовать гудок, когда:"
        },
        "options": {
            "en": [
                "A car is in your way.",
                "If it helps to avoid a crash.",
                "You want to change lanes."
            ],
            "ru": [
                "Автомобиль мешает вам.",
                "Если это помогает избежать аварии. ",
                "Вы хотите перестроиться."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.5.2 - Communicating Your Presence\nYour horn can let others know you're there. It can help to avoid a crash. Use your horn when needed. However, it can startle others and could be dangerous when used unnecessarily.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.5.2 - Сообщение о вашем присутствии\nВаш гудок может дать другим знать, что вы здесь. Он может помочь избежать аварии. Используйте гудок по необходимости. Однако это может испугать других и может быть опасным, если используется ненужно.",
                "",
            ]
        }
    },

    {
        "id": 162,
        "text": {
            "en": "The tread depth on front steering wheel tires should be:",
            "ru": "Глубина протектора передних шин рулевых колес должна быть:"
        },
        "options": {
            "en": [
                "Not less than 2/32 inch.",
                "Not less than 4/32 inch. ",
                "More than 6/32 inch."
            ],
            "ru": [
                "Не менее 2/32 дюйма.",
                "Не менее 4/32 дюйма. ",
                "Более 6/32 дюйма."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.13.1 - Vehicle Checks\nYou must have at least 4/32 inch tread depth in every major groove on front tires and at least 2/32 inch on other tires. More would be better.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.13.1 - Проверка автомобиля\nДолжна быть как минимум 4/32 дюйма глубина протектора в каждой основной пазухе передних шин и не менее 2/32 дюйма на других шинах. Больше будет лучше.",
                "",
            ]
        }
    },

    {
        "id": 163,
        "text": {
            "en": "Your vehicle will be put out of service if __ or more leaves in any leaf spring are missing.",
            "ru": "Ваше транспортное средство будет отправлено в недействующее состояние, если __ или более листьев отсутствуют в любой рессоре."
        },
        "options": {
            "en": [
                "1/4 ",
                "1/2",
                "1/3"
            ],
            "ru": [
                "1/4 ",
                "1/2",
                "1/3"
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.1.3 - What to Look For\nMissing or broken leaves in any leaf spring. Any defect could be dangerous. If any of the following conditions exist the vehicle will be placed out of service, and must be repaired: One-fourth or more of the leaves in any spring assembly are broken",
                "",
                ""
            ],
            "ru": [
                "Объяснение: Раздел: 2.1.3 - Что следует искать\nОтсутствующие или сломанные листья в любой рессоре. Любой дефект может быть опасным. Если существует хотя бы одно из следующих условий, транспортное средство будет отправлено на обслуживание и должно быть отремонтировано: Один четверть или более листьев в любой рессорной сборке сломаны.",
                "",
                "",
            ]
        }
    },

    {
        "id": 164,
        "text": {
            "en": "Brake drums (or discs) must not have cracks longer than __ the width of the friction area.",
            "ru": "Тормозные барабаны (или диски) не должны иметь трещин длиннее __ ширины области трения."
        },
        "options": {
            "en": [
                "1/10",
                "1/3",
                "1/2 "
            ],
            "ru": [
                "1/10",
                "1/3",
                "1/2 "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 5.3.2 - During Step 5 Walk Around Inspection\nBrake drums (or discs) must not have cracks longer than one half the width of the friction area",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 5.3.2 - Во время осмотра на шаге 5\nТормозные барабаны (или диски) не должны иметь трещин длиннее половины ширины области трения.",
            ]
        }
    },

    {
        "id": 165,
        "text": {
            "en": "A hazard:",
            "ru": "Опасность:"
        },
        "options": {
            "en": [
                "Is any road condition or other road user that is possible danger. ",
                "Does not need to be seen.",
                "Cannot turn into emergency."
            ],
            "ru": [
                "Это любое дорожное условие или другой участник движения, представляющий возможную опасность. ",
                "Не обязательно должна быть видимой.",
                "Не может перерасти в чрезвычайную ситуацию."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.8.1 - Importance of Seeing Hazards\nA hazard is any road condition or other road user (driver, bicyclist, pedestrian) that is a possible danger.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.8.1 - Значение выявления опасностей\nОпасность - это любое дорожное состояние или другой участник движения (водитель, велосипедист, пешеход), представляющий возможную опасность.",
                "",
                "",
            ]
        }
    },

    {
        "id": 166,
        "text": {
            "en": "You are driving a heavy vehicle. You must exit a highway using an off-ramp that curves downhill.\n\nYou should:",
            "ru": "Вы управляете грузовым транспортным средством. Вам необходимо съехать с автомагистрали, используя спускающийся съезд.\n\nВы должны:"
        },
        "options": {
            "en": [
                "Slow down to a safe speed before the turn. ",
                "Slow to the posted speed limit for the off-ramp.",
                "Slow down to 15 mph below the posted speed limit."
            ],
            "ru": [
                "Замедлиться до безопасной скорости перед поворотом. ",
                "Замедлиться до установленного предельного ограничения скорости для съезда.",
                "Замедлиться на 15 миль в час ниже установленного предельного ограничения скорости."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.6.3 - Speed and Curves\nSlow to a safe speed before you enter a curve. Braking in a curve is dangerous because it is easier to lock the wheels and cause a skid. Slow down as needed. Don't ever exceed the posted speed limit for the curve. Be in a gear that will let you accelerate slightly in the curve. This will help you keep control.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6.3 - Скорость и повороты\nЗамедлитесь до безопасной скорости перед входом в поворот. Торможение в повороте опасно, так как проще блокировать колеса и вызвать занос. Замедляйтесь по мере необходимости. Никогда не превышайте установленное предельное ограничение скорости для поворота. Будьте на передаче, которая позволит вам слегка ускориться в повороте. Это поможет вам сохранить управление.",
                "",
                "",
            ]
        }
    },

    {
        "id": 167,
        "text": {
            "en": "Which of these rigs has a higher chance of off-tracking while making a turn?",
            "ru": "Какой из этих составов имеет больший шанс отклонения от заданной траектории при повороте?"
        },
        "options": {
            "en": [
                "Tractor with 45-feet trailer.",
                "53-feet straight truck.",
                "Tractor with two 27-feet trailers. "
            ],
            "ru": [
                "Тягач с прицепом длиной 45 футов.",
                "Прямой грузовик длиной 53 фута.",
                "Тягач с двумя прицепами длиной 27 футов. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 6.1.6 - Turn Wide\nLonger vehicles will off-track more. The rear wheels of the powered unit (truck or tractor) will off-track some, and the rear wheels of the trailer will off-track even more. If there is more than one trailer, the rear wheels of the last trailer will off-track the most.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 6.1.6 - Поворот широко\nБолее длинные транспортные средства будут отклоняться от траектории более сильно. Задние колеса силовой части (грузовика или тягача) будут отклоняться от траектории немного, и задние колеса прицепа будут отклоняться даже сильнее. Если есть более одного прицепа, то задние колеса последнего прицепа будут отклоняться от траектории наиболее сильно.",
            ]
        }
    },

    {
        "id": 168,
        "text": {
            "en": "How much space in front of you is needed while driving on a highway?",
            "ru": "Какое количество пространства впереди вас требуется при движении на автостраде?"
        },
        "options": {
            "en": [
                "1 second for each 10 feet of vehicle length. ",
                "1 second for each 30 feet of vehicle length.",
                "1 second for each 20 feet of vehicle length."
            ],
            "ru": [
                "1 секунда на каждые 10 футов длины транспортного средства. ",
                "1 секунда на каждые 30 футов длины транспортного средства.",
                "1 секунда на каждые 20 футов длины транспортного средства."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.7.1 - Space Ahead\nHow much space should you keep in front of you? One good rule says you need at least one second for each 10 feet of vehicle length at speeds below 40 mph. At greater speeds, you must add 1 second for safety.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.7.1 - Пространство впереди\nКакое количество пространства вы должны оставить впереди? Хорошее правило гласит, что вам нужно как минимум одну секунду на каждые 10 футов длины транспортного средства при скоростях ниже 40 миль в час. При больших скоростях вы должны добавить 1 секунду для безопасности.",
                "",
                "",
            ]
        }
    },

    {
        "id": 169,
        "text": {
            "en": "Medicine used to treat the common cold:",
            "ru": "Лекарство, используемое для лечения обычной простуды:"
        },
        "options": {
            "en": [
                "Often makes you sleepy and should not be used while driving. ",
                "May still be used while driving if you use half of a regular dose.",
                "Should only be used when driving during the daytime."
            ],
            "ru": [
                "Часто вызывает сонливость и не следует использовать во время вождения. ",
                "Может быть использовано во время вождения, если вы используете половину обычной дозы.",
                "Следует использовать только при вождении днем."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.22.2 - Other Drugs\nLaws prohibit possession or use of many drugs while on duty. They prohibit being under the influence of any controlled substance, amphetamines, narcotics, or any other substance, which can make the driver unsafe. This could include a variety of prescription and over-the-counter drugs (cold medicines), which may make the driver drowsy or otherwise affect safe driving ability.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.22.2 - Другие лекарства\nЗаконы запрещают владение или использование многих лекарств во время дежурства. Они запрещают нахождение под воздействием какого-либо контролируемого вещества, амфетаминов, наркотиков или любого другого вещества, которое может сделать водителя небезопасным. Это может включать в себя различные лекарства, выписанные по рецепту или продаваемые без рецепта (противопростудные лекарства), которые могут вызывать сонливость у водителя или иным образом влиять на безопасность вождения.",
                "",
                "",
            ]
        }
    },

    {
        "id": 170,
        "text": {
            "en": "Which of these should you NOT do in an emergency situation?",
            "ru": "Что из перечисленного вам НЕ следует делать в аварийной ситуации?"
        },
        "options": {
            "en": [
                "You should brake in a way that keeps your vehicle in a straight line.",
                "It is not important how you brake in an emergency situation. ",
                "You should avoid using the brakes until your speed is down to 20 mph."
            ],
            "ru": [
                "Вы должны тормозить так, чтобы ваше транспортное средство двигалось по прямой линии.",
                "Неважно, как вы тормозите в аварийной ситуации. ",
                "Вы должны избегать использования тормозов, пока ваша скорость не снизится до 20 миль в час."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.17.1 - Steering to Avoid an Accident and 5.4.3 - Emergency Stops\nIf possible, avoid using the brakes until your speed has dropped to about 20 mph. Then brake very gently to avoid skidding on a loose surface. You should brake in a way that will keep your vehicle in a straight line and allow you to turn if it becomes necessary. You can use the \"controlled braking\" method or the \"stab braking\" method.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.17.1 - Управление для избежания аварии и 5.4.3 - Аварийная остановка\nПри возможности избегайте использования тормозов до тех пор, пока скорость не упадет до примерно 20 миль в час. Затем тормозите очень осторожно, чтобы избежать скольжения на скользкой поверхности. Вы должны тормозить так, чтобы ваше транспортное средство двигалось по прямой линии и позволяло вам повернуть, если это станет необходимым. Вы можете использовать метод \"контролируемого торможения\" или метод \"рывкового торможения\".",
                "",
            ]
        }
    },

    {
        "id": 171,
        "text": {
            "en": "The primary cause of fatal crashes is:",
            "ru": "Основной причиной смертельных аварий является:"
        },
        "options": {
            "en": [
                "Driving too fast. ",
                "Driving at night.",
                "Driving while eating."
            ],
            "ru": [
                "Слишком быстрая езда. ",
                "Езда ночью.",
                "Езда во время еды."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.6 - Controlling Speed\nDriving too fast is a major cause of fatal accidents. You must adjust your speed depending on driving conditions. These include traction, curves, visibility, traffic and hills.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6 - Регулирование скорости\nСлишком быстрая езда является одной из основных причин смертельных аварий. Вы должны подстраивать свою скорость в зависимости от условий движения. Это включает сцепление, повороты, видимость, движение и подъемы.",
                "",
                "",
            ]
        }
    },

    {
        "id": 172,
        "text": {
            "en": "A car suddenly cuts in front of you, creating a hazard. Which of these actions should you NOT take?",
            "ru": "Автомобиль внезапно перестраивается перед вами, создавая опасность. Какое из этих действий вы НЕ должны предпринимать?"
        },
        "options": {
            "en": [
                "Honk your horn and stay close behind the car. ",
                "Slow down to prevent a crash.",
                "Signal and change lanes to avoid the hazard."
            ],
            "ru": [
                "Заиграйте сигналом и приблизьтесь к автомобилю. ",
                "Замедлите, чтобы предотвратить столкновение.",
                "Включите сигнал поворота и перестройтесь, чтобы избежать опасности."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.8.1 - Importance of Seeing Hazards\nYou will have more time to act if you see hazards before they become emergencies. You might make a lane change or slow down to prevent an accident if the car suddenly cuts in front of you.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.8.1 - Важность обнаружения опасностей\nУ вас будет больше времени для действий, если вы видите опасности, прежде чем они превратятся в чрезвычайные ситуации. Вы можете сделать перестройку или замедлиться, чтобы предотвратить аварию, если автомобиль вдруг перестраивается перед вами.",
                "",
                "",
            ]
        }
    },

    {
        "id": 173,
        "text": {
            "en": "What should you do when you see a hazard in the roadway ahead of you?",
            "ru": "Что вы должны сделать, когда вы видите опасность на дороге впереди?"
        },
        "options": {
            "en": [
                "Steer around it and get back in your lane.",
                "Use your four-way flashers or brake lights to warn others. ",
                "Stop quickly and pull to the side of the road."
            ],
            "ru": [
                "Объезжайте ее и возвращайтесь на свою полосу.",
                "Используйте аварийные мигалки или тормозные огоньки, чтобы предупредить других. ",
                "Быстро остановитесь и припаркуйтесь на обочине."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.5.1 - Signal Your Intentions\nWarn drivers behind you when you see you will need to slow down. A few light taps on the brake pedal, enough to flash the brake lights should warn following drivers. Use the four-way emergency flashers for times when you are driving very slowly or are stopped.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.5.1 - Сигнализируйте о своих намерениях\nПредупреждайте водителей позади вас, когда вы видите, что вам нужно будет замедлиться. Несколько легких нажатий на тормозную педаль, достаточно для моргания стоп-сигналами, должны предупредить следящих водителей. Используйте аварийные мигалки в тех случаях, когда вы движетесь очень медленно или стоите.",
                "",
            ]
        }
    },

    {
        "id": 174,
        "text": {
            "en": "If your brakes fail on a downgrade, you must first:",
            "ru": "Если тормоза отказывают на спуске, вы должны сначала:"
        },
        "options": {
            "en": [
                "Look outside your vehicle for another means of slowing you. ",
                "Hit some object to stop your vehicle.",
                "Find an escape ramp to exit the roadway."
            ],
            "ru": [
                "Посмотреть вокруг автомобиля, чтобы найти другой способ замедления. ",
                "Столкнуться с каким-либо объектом, чтобы остановить автомобиль.",
                "Найти площадку для экстренного торможения, чтобы выйти с дороги."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.17.3 - brake Failure\nOnce the brakes have failed, however, you are going to have to look outside your vehicle for something to stop it.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17.3 - brake Failure\nОднако, как только тормоза выйдут из строя, вам придется искать снаружи своего автомобиля что-то, чтобы остановить его.",
                "",
                "",
            ]
        }
    },

    {
        "id": 175,
        "text": {
            "en": "You should always turn on your emergency four-way flashers when you:",
            "ru": "Вы всегда должны включать аварийные мигалки, когда:"
        },
        "options": {
            "en": [
                "Cross railway tracks.",
                "Drive through the mountains.",
                "Park on the side of the road. "
            ],
            "ru": [
                "Пересекаете железнодорожные пути.",
                "Проезжаете через горы.",
                "Паркуетесь на обочине дороги. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 13.1.6 - Stop/Start\nAs you prepare for the stop: Once stopped, Activate your four-way emergency flashers.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 13.1.6 - Stop/Start\nПри подготовке к остановке: После остановки активируйте аварийные мигалки.",
            ]
        }
    },

    {
        "id": 176,
        "text": {
            "en": "Should brake adjustment be checked often?",
            "ru": "Следует ли часто проверять регулировку тормозов?"
        },
        "options": {
            "en": [
                "It depends on how the brakes are.",
                "Yes, because the brakes can get out of adjustment when they are used a lot. ",
                "No, because the other brakes will make up for the air brakes when they are out of adjustment."
            ],
            "ru": [
                "Это зависит от состояния тормозов.",
                "Да, потому что тормоза могут выйти из регулировки, когда они много используются. ",
                "Нет, потому что другие тормоза будут компенсировать регулировку воздушных тормозов, когда она будет нарушена."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.16.3 - Brake Fading or Failure\nBrakes can get out of adjustment quickly, especially when they are used a lot; also, brake linings wear faster when they are hot. Therefore, brake adjustment must be checked frequently.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.16.3 - Brake Fading or Failure\nТормоза могут быстро выйти из регулировки, особенно когда они много используются; также тормозные накладки быстрее изнашиваются, когда они горячие. Поэтому регулировку тормозов следует часто проверять.",
                "",
            ]
        }
    },

    {
        "id": 177,
        "text": {
            "en": "Which of these is true about mirror adjusting?",
            "ru": "Что верно относительно регулировки зеркал?"
        },
        "options": {
            "en": [
                "You should adjust your mirrors while you are driving.",
                "You should adjust your mirrors before starting the trip. ",
                "The mirrors could be adjusted correctly even if the trailer is not straight."
            ],
            "ru": [
                "Вы должны регулировать зеркала, находясь за рулем.",
                "Вы должны регулировать зеркала перед началом поездки. ",
                "Зеркала можно правильно настроить даже если прицеп не находится в прямой линии."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.4.2 - Seeing to the Sides and Rear\nMirror adjustment should be checked prior to the start of any trip and can only be checked accurately when the trailer(s) are straight.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.4.2 - Seeing to the Sides and Rear\nРегулировка зеркал должна быть проверена перед началом поездки и может быть точно проверена только тогда, когда прицеп(ы) находятся в прямой линии.",
                "",
            ]
        }
    },

    {
        "id": 178,
        "text": {
            "en": "When you are driving on a snow-packed road, you should reduce your speed by:",
            "ru": "Когда вы едете по дороге, покрытой снегом, вы должны снизить скорость на:"
        },
        "options": {
            "en": [
                "1/3",
                "1/4",
                "1/2 "
            ],
            "ru": [
                "1/3",
                "1/4",
                "1/2 "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.6.2 - Matching Speed to the Road Surface\nOn packed snow, reduce speed by a half, or more. If the surface is icy, reduce speed to a crawl and stop driving as soon as you can safely do so.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.6.2 - Matching Speed to the Road Surface\nНа уплотненном снеге снизьте скорость на половину или более. Если поверхность обледенела, снизьте скорость до ползучей и остановитесь как можно скорее, как только это можно сделать безопасно.",
            ]
        }
    },

    {
        "id": 179,
        "text": {
            "en": "The bridge formula:",
            "ru": "Формула моста:"
        },
        "options": {
            "en": [
                "Permits the same maximum axle weight for any axle.",
                "Permits less maximum axle weight for axles that are closer together. ",
                "Permits less maximum axle weight for the axles that are far apart."
            ],
            "ru": [
                "Позволяет одинаковый максимальный вес для любой оси.",
                "Позволяет меньший максимальный вес для осей, которые находятся ближе друг к другу. ",
                "Позволяет меньший максимальный вес для осей, которые находятся дальше друг от друга."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 3.2.2 - Legal Weight Limits\nA bridge formula permits less maximum axle weight for axles that are closer together. This is to prevent overloading bridges and roadways.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 3.2.2 - Legal Weight Limits\nФормула моста позволяет меньший максимальный вес для осей, которые находятся ближе друг другу. Это сделано для предотвращения перегрузки мостов и дорог.",
                "",
            ]
        }
    },

    {
        "id": 180,
        "text": {
            "en": "You should use your mirror to check?",
            "ru": "Вы должны использовать зеркало, чтобы проверить?"
        },
        "options": {
            "en": [
                "Where the rear of your vehicle is while you make turns. ",
                "If your running lights are working.",
                "Blind spots."
            ],
            "ru": [
                "Где находится задняя часть вашего транспортного средства во время поворотов. ",
                "Работают ли ваши габаритные огни.",
                "Слепые зоны."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.4.2 - Seeing to the Sides and Rear\nIn turns, check your mirrors to make sure the rear of your vehicle will not hit anything.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.4.2 - Seeing to the Sides and Rear\nПри поворотах проверяйте зеркала, чтобы убедиться, что задняя часть вашего транспортного средства никуда не ударится.",
                "",
                "",
            ]
        }
    },

    {
        "id": 181,
        "text": {
            "en": "Which of these is true about the use of drugs while driving?",
            "ru": "Что из следующего верно относительно употребления лекарств во время вождения?"
        },
        "options": {
            "en": [
                "Prescription or non-prescription drugs are allowed at any time of driving.",
                "Prescription drugs are allowed if a doctor says they will not affect the driving ability. ",
                "Use of amphetamine is allowed if you are using this drug to stay alert."
            ],
            "ru": [
                "Рецептурные или безрецептурные лекарства разрешены в любое время вождения.",
                "Рецептурные лекарства разрешены, если врач говорит, что они не повлияют на способность управлять транспортным средством. ",
                "Использование амфетамина разрешено, если вы используете этот препарат, чтобы оставаться бодрым."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.22.2 - Other Drugs\nHowever, possession and use of a drug given to a driver by a doctor is permitted if the doctor informs the driver that it will not affect safe driving ability.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.22.2 - Other Drugs\nОднако владение и использование препарата, предоставленного водителю врачом, разрешено, если врач информирует водителя о том, что это не повлияет на безопасную способность управлять транспортным средством.",
                "",
            ]
        }
    },

    {
        "id": 182,
        "text": {
            "en": "Which of these is true about the proper use of a steering wheel?",
            "ru": "Что из следующего верно относительно правильного использования рулевого колеса?"
        },
        "options": {
            "en": [
                "If you have reached a cruising speed on a highway, you can drive with one hand.",
                "Only with an attempt of a difficult turn, use both hands on the wheel.",
                "If you do not hold a wheel with both hands, it could pull away from you. "
            ],
            "ru": [
                "Если вы достигли крейсерской скорости на шоссе, вы можете водить с одной рукой.",
                "Только при попытке сложного поворота используйте обе руки на рулевом колесе.",
                "Если вы не удерживаете руль обеими руками, он может вырваться у вас из рук. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.2.2 - Steering\nHold the steering wheel firmly with both hands. Your hands should be on opposite sides of the wheel. If you hit a curb or a pothole (chuckhole), the wheel could pull away from your hands unless you have a firm hold."
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.2.2 - Steering\nКрепко держите рулевое колесо обеими руками. Ваши руки должны быть на противоположных сторонах руля. Если вы ударите в бордюр или выбоину, руль может вырваться из ваших рук, если у вас нет крепкой удерживающей силы."
            ]
        }
    },

    {
        "id": 183,
        "text": {
            "en": "When are helpers needed to back your vehicle?",
            "ru": "Когда необходимы помощники для того чтобы развернуть ваше транспортное средство назад?"
        },
        "options": {
            "en": [
                "Only if you need to park.",
                "Whenever you have to back. ",
                "Only if you have a trailer on your vehicle."
            ],
            "ru": [
                "Только если вам нужно припарковаться.",
                "Всякий раз, когда вам нужно развернуться назад. ",
                "Только если на вашем транспортном средстве есть прицеп."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.2.4 - Backing Safely\nUse a helper when you can. There are blind spots you can't see. That's why a helper is important. The helper should stand near the back of your vehicle where you can see them.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.2.4 - Backing Safely\nИспользуйте помощника, когда можете. Есть слепые зоны, которые вы не видите. Вот почему помощник важен. Помощник должен стоять у задней части вашего транспортного средства, где вы можете видеть его.",
                "",
            ]
        }
    },

    {
        "id": 184,
        "text": {
            "en": "To avoid an accident you moved to the shoulder. Forced to return to the road, you should:",
            "ru": "Чтобы избежать аварии, вы переехали на обочину. Принужденно возвращаясь на дорогу, вы должны:"
        },
        "options": {
            "en": [
                "Using mirrors and turn signals, return when the road is clear.",
                "Using mirrors and turn signals, turn sharply to get back to the road. ",
                "Ride on the shoulder to the next exit and then re-enter the road."
            ],
            "ru": [
                "С помощью зеркал и сигналов поворота вернуться на дорогу, когда она будет свободной.",
                "С помощью зеркал и сигналов поворота резко повернуть, чтобы вернуться на дорогу. ",
                "Двигаться по обочине до следующего выхода, а затем вернуться на дорогу."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.17.1 - Steering to Avoid a Crash\nHold the wheel tightly and turn sharply enough to get right back on the road safely. Don't try to edge gradually back on the road. If you do, your tires might grab unexpectedly and you could lose control.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.17.1 - Steering to Avoid a Crash\nКрепко держите руль и поворачивайте достаточно резко, чтобы вернуться на дорогу безопасно. Не пытайтесь постепенно вернуться на дорогу. Если вы это сделаете, ваши шины могут неожиданно ухватиться, и вы можете потерять управление.",
                "",
            ]
        }
    },

    {
        "id": 185,
        "text": {
            "en": "Which of these would NOT help if the windshield is covered with ice?",
            "ru": "Что из перечисленного НЕ поможет, если лобовое стекло покрыто льдом?"
        },
        "options": {
            "en": [
                "Windshield defroster.",
                "Dust brush. ",
                "Windshield scraper."
            ],
            "ru": [
                "Подогреватель лобового стекла.",
                "Щетка для пыли. ",
                "Скребок для лобового стекла."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.13.1 - Vehicle Checks\nRemove any ice, snow, etc, from the windshield, windows, and mirrors before starting. Use a windshield scraper, snow brush, and windshield defroster as necessary.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.13.1 - Vehicle Checks\nУдалите лед, снег и т. д. с лобового стекла, окон и зеркал перед началом движения. Используйте скребок для лобового стекла, щетку для снега и подогреватель лобового стекла по необходимости.",
                "",
            ]
        }
    },

    {
        "id": 186,
        "text": {
            "en": "Heavy vehicles often move slower than others. Which of these is NOT a good rule to follow while driving a heavy vehicle?",
            "ru": "Тяжелые транспортные средства часто двигаются медленнее других. Какое из перечисленных правил НЕ является хорошим для соблюдения при вождении тяжелого транспортного средства?"
        },
        "options": {
            "en": [
                "Use four-way flashers if it is legal in your state.",
                "Stay on the right side of the road.",
                "Signal other drivers when it is safe to pass you. "
            ],
            "ru": [
                "Используйте аварийные мигалки, если это разрешено в вашем штате.",
                "Держитесь на правой стороне дороги.",
                "Давайте сигнал другим водителям, когда для вас безопасно обгонять вас. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.5.1 - Signal Your Intentions\nSome drivers try to help out others by signaling when it is safe to pass. You should not do this. You could cause an accident. You could be blamed and it could cost you many thousands of dollars.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.5.1 - Signal Your Intentions\nНекоторые водители пытаются помочь другим, давая сигнал, когда безопасно обгонять. Вы не должны делать этого. Вы можете вызвать аварию. Вас могут обвинить, и это может стоить вам множество тысяч долларов.",
            ]
        }
    },

    {
        "id": 187,
        "text": {
            "en": "Tourists may be hazardous because?",
            "ru": "Туристы могут быть опасными, потому что?"
        },
        "options": {
            "en": [
                "They drive rented cars.",
                "They may move slowly, unexpectedly change lanes, or stop. ",
                "Police do not fine them."
            ],
            "ru": [
                "Они водят арендованные машины.",
                "Они могут двигаться медленно, неожиданно перестраиваться или останавливаться. ",
                "Полиция не штрафует их."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.8.3 - Drivers Who Are Hazards\nTourists unfamiliar with the area can be very hazardous. Clues to tourists include car-top luggage and out-of-state license plates. Unexpected actions (stopping in the middle of a block, changing lanes for no apparent reason, backup lights suddenly going on) are clues to confusion. Hesitation is another clue, including driving very slowly, using brakes often, or stopping in the middle of an intersection.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.8.3 - Drivers Who Are Hazards\nТуристы, не знакомые с районом, могут быть очень опасными. Признаками туристов являются багаж на крыше машины и номерные знаки из другого штата. Неожиданные действия (остановка посередине блока, перестроение без видимой причины, включение задних фонарей внезапно) являются признаками путаницы. Нерешительность - это еще один признак, включая очень медленное движение, частое использование тормозов или остановку посередине перекрестка.",
                "",
            ]
        }
    },

    {
        "id": 188,
        "text": {
            "en": "What keeps an engine cool in hot weather driving?",
            "ru": "Что сохраняет прохладу двигателя во время вождения в жаркую погоду?"
        },
        "options": {
            "en": [
                "Air conditioner use.",
                "Enough engine oil level. ",
                "High-speed driving in order to put more air to the radiator."
            ],
            "ru": [
                "Использование кондиционера.",
                "Достаточный уровень масла в двигателе. ",
                "Высокоскоростное движение, чтобы подвести больше воздуха к радиатору."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.14.1 - Vehicle Checks\nThe engine oil helps keep the engine cool, as well as lubricating it. Make sure there is enough engine oil. If you have an oil temperature gauge, make sure the temperature is within the proper range while you are driving.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.14.1 - Vehicle Checks\nМоторное масло помогает сохранять прохладу двигателя, а также смазывает его. Убедитесь, что в двигателе достаточно масла. Если у вас есть маслянный температурный датчик, убедитесь, что температура находится в пределах правильного диапазона во время движения.",
                "",
            ]
        }
    },

    {
        "id": 189,
        "text": {
            "en": "Cargo inspection:",
            "ru": "Проверка груза:"
        },
        "options": {
            "en": [
                "Is most often not the responsibility of the driver.",
                "Are needed only if hazardous materials are being hauled.",
                "Should be performed after every break you take while driving. "
            ],
            "ru": [
                "Как правило, не является обязанностью водителя.",
                "Необходима только если перевозятся опасные материалы.",
                "Должна выполняться после каждой паузы во время вождения. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 3.1 - Inspecting Cargo\nRe-check the cargo and securing devices as often as necessary during a trip to keep the load secure. You need to inspect again: After every break you take during driving.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 3.1 - Inspecting Cargo\nПовторно проверяйте груз и средства крепления так часто, как необходимо во время поездки, чтобы груз был надежно закреплен. Вам необходимо проводить повторную проверку: После каждой паузы, которую вы берете во время вождения.",
            ]
        }
    },

    {
        "id": 190,
        "text": {
            "en": "A vehicle is loaded with very little weight on the drive axle. What may happen?",
            "ru": "Транспортное средство загружено с очень маленьким весом на приводной оси. Что может произойти?"
        },
        "options": {
            "en": [
                "Poor traction. ",
                "Damage to drive axle tires.",
                "Better handling."
            ],
            "ru": [
                "Плохое сцепление. ",
                "Повреждение шин приводной оси.",
                "Лучшее управление."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 3.2.4 - Balance the Weight\nToo little weight on the driving axles can cause poor traction. The drive wheels may spin easily.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 3.2.4 - Balance the Weight\nСлишком мало веса на приводных осях может вызвать плохое сцепление. Приводные колеса могут легко прокручиваться.",
                "",
                "",
            ]
        }
    },

    {
        "id": 191,
        "text": {
            "en": "If your vehicle catches fire while you are driving, you should:",
            "ru": "Если ваше транспортное средство загорается во время движения, вы должны:"
        },
        "options": {
            "en": [
                "Park where a building or trees shelter your vehicle from the wind.",
                "Increase your speed to put out the flames.",
                "Park in an open area. "
            ],
            "ru": [
                "Парковаться там, где здание или деревья прикрывают ваше транспортное средство от ветра.",
                "Увеличивать скорость, чтобы потушить пламя.",
                "Парковаться на открытой площадке. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.21.3 - Fire Fighting\nPark in an open area, away from buildings, trees, brush, other vehicles, or anything that might catch fire."
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.21.3 - Fire Fighting\nПаркуйтесь на открытой площадке, подальше от зданий, деревьев, кустарников, других транспортных средств или всего, что может загореться."
            ]
        }
    },

    {
        "id": 192,
        "text": {
            "en": "Which of these statements about marking a stopped vehicle is true?",
            "ru": "Какое из следующих утверждений о разметке остановившегося транспортного средства верно?"
        },
        "options": {
            "en": [
                "You must put out your emergency warning devices within 5 minutes.",
                "If a hill or curve keeps drivers behind you from seeing the vehicle within 500 feet, the reflective triangle should be moved back to give adequate warning. ",
                "The vehicle's tail lights should be kept on to warn other drivers."
            ],
            "ru": [
                "Вы должны разместить аварийные предупреждающие устройства в течение 5 минут.",
                "Если холм или поворот мешают водителям сзади видеть транспортное средство в пределах 500 футов, отражающий треугольник следует переместить назад, чтобы дать достаточное предупреждение. ",
                "Фонари заднего хода транспортного средства должны быть включены, чтобы предупредить других водителей."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "Section: 2.5.2 - Communicating Your Presence\nBack beyond any hill, curve, or other obstruction that prevents other drivers from seeing the vehicle within 500 feet. If line of sight view is obstructed due to hill or curve, move the rear-most triangle to a point back down the road so warning is provided.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.5.2 - Communicating Your Presence\nОтодвиньтесь за холм, поворот или другое препятствие, которое мешает другим водителям видеть транспортное средство в пределах 500 футов. Если поле зрения закрыто из-за холма или поворота, переместите задний треугольник на некоторое расстояние назад по дороге, чтобы обеспечить достаточное предупреждение.",
                "",
                "",
            ]
        }
    },

    {
        "id": 193,
        "text": {
            "en": "Containerized loads:",
            "ru": "Контейнеризованные грузы:"
        },
        "options": {
            "en": [
                "Should be supplied with their own tie-down devices or locks.",
                "Are not required to be inspected by a driver.",
                "Generally are used when freight is carried part way by rail or ship. "
            ],
            "ru": [
                "Должны быть оснащены своими стяжными устройствами или замками.",
                "Не требуется проверка водителем.",
                "Обычно используются, когда груз перевозится частично по железной дороге или морем. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 3.3.5 - Sealed and Containerized Loads\nContainerized loads generally are used when freight is carried part way by rail or ship. Delivery by truck occurs at the beginning and/ or end of the journey.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 3.3.5 - Sealed and Containerized Loads\nКонтейнеризованные грузы, как правило, используются, когда груз перевозится частично по железной дороге или морем. Доставка груза грузовиком происходит в начале и/ или конце пути.",
            ]
        }
    },

    {
        "id": 194,
        "text": {
            "en": "When a coolant container is part of a pressurized system, which of these is true?",
            "ru": "Когда ёмкость охлаждающей жидкости является частью системы давления, что из следующего верно?"
        },
        "options": {
            "en": [
                "The radiator cap can be safely removed, and coolant added while the engine is hot.",
                "You never need to check the antifreeze in such a system.",
                "You can check the coolant level of a hot engine. "
            ],
            "ru": [
                "Крышку радиатора можно безопасно снять и добавить охлаждающую жидкость, пока двигатель горячий.",
                "Вам никогда не нужно проверять антифриз в такой системе.",
                "Вы можете проверить уровень охлаждающей жидкости горячего двигателя. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.14.1 - Vehicle Checks\nSome vehicles have sight glasses, see-through coolant overflow containers, or coolant recovery containers. These permit you to check the coolant level while the engine is hot. If the container is not part of the pressurized system, the cap can be safely removed and coolant added even when the engine is at operating temperature.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.14.1 - Vehicle Checks\nНекоторые транспортные средства имеют стеклянные колбы, прозрачные ёмкости для охлаждающей жидкости или восстановительные контейнеры для охлаждающей жидкости. Они позволяют вам проверять уровень охлаждающей жидкости, пока двигатель горячий. Если контейнер не является частью давящей системы, крышку можно безопасно снимать и добавлять охлаждающую жидкость даже при рабочей температуре двигателя.",
            ]
        }
    },

    {
        "id": 195,
        "text": {
            "en": "When should you test your parking brakes?",
            "ru": "Когда вы должны проверять стояночные тормоза?"
        },
        "options": {
            "en": [
                "When backing.",
                "While moving at a very low speed.",
                "While the vehicle is parked. "
            ],
            "ru": [
                "При движении задним ходом.",
                "Во время движения с очень низкой скоростью.",
                "Во время стоянки. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.1.5 - Seven-step Inspection Method\nSee Step 7: Start the Engine and Check",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.5 - Seven-step Inspection Method\nСм. Шаг 7: Завести двигатель и проверить",
            ]
        }
    },

    {
        "id": 196,
        "text": {
            "en": "When going down a long steep downgrade, you should always:",
            "ru": "При спуске по долгому крутому спуску вы всегда должны:"
        },
        "options": {
            "en": [
                "Brake when you exceed the safe speed by 5 mph.",
                "Use controlled braking.",
                "Use the braking effect of the engine. "
            ],
            "ru": [
                "Прокачивать тормоза, если вы превышаете безопасную скорость на 5 миль в час.",
                "Использовать контролируемое торможение.",
                "Использовать тормозной эффект двигателя. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.6.6 - Speed on Downgrades\nYou must use the braking effect of the engine as the principal way of controlling your speed on downgrades. The braking effect of the engine is greatest when it is near the governed RPMs and the transmission is in the lower gears.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.6.6 - Speed on Downgrades\nВы должны использовать тормозной эффект двигателя как основной способ контроля за скоростью на спусках. Тормозной эффект двигателя наиболее сильный, когда он близок к максимальным оборотам и трансмиссия находится на низших передачах.",
            ]
        }
    },

    {
        "id": 197,
        "text": {
            "en": "Controlled braking is:",
            "ru": "Контролируемое торможение означает:"
        },
        "options": {
            "en": [
                "Squeezing the brakes firmly without locking them up. ",
                "Pressing brakes until wheel lock-up occurs, releasing and then reapplying.",
                "Slamming on the brakes hard and making wheels lock up."
            ],
            "ru": [
                "Нажимать на тормоза крепко, не блокируя их. ",
                "Нажимать на тормоза до блокировки колес, затем отпускать и заново нажимать.",
                "Резко нажимать на тормоза, вызывая блокировку колес."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.17.2 - Emergency Braking\nWith this method, you apply the brakes as hard as you can without locking the wheels. Keep steering wheel movements very small while doing this.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17.2 - Emergency Braking\nС этим методом вы нажимаете на тормоза так сильно, как только можете, не блокируя колеса. При этом держите движения рулевого колеса очень маленькими.",
                "",
                "",
            ]
        }
    },

    {
        "id": 198,
        "text": {
            "en": "Which of these is not a brake check you normally do during your walk-around inspection?",
            "ru": "Какая из следующих проверок тормозов обычно не выполняется во время обходного осмотра?"
        },
        "options": {
            "en": [
                "Hydraulic brake cylinders leaks.",
                "Brake adjustment. ",
                "Condition of hoses."
            ],
            "ru": [
                "Утечки гидравлических тормозных цилиндров.",
                "Регулировка тормозов. ",
                "Состояние шлангов."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.1.5 - Seven-step Inspection Method\nNotice brake adjustment is not in any inspection step.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.1.5 - Seven-step Inspection Method\nОбратите внимание, что регулировка тормозов не входит в ни один из этапов проверки.",
                "",
            ]
        }
    },

    {
        "id": 199,
        "text": {
            "en": "One can recognize hazardous materials by looking on the container:",
            "ru": "Опасные материалы можно опознать, глядя на контейнер:"
        },
        "options": {
            "en": [
                "Shapes",
                "Labels ",
                "Covers"
            ],
            "ru": [
                "Формы",
                "Этикетки ",
                "Обложки"
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.23.2 - Why Are There Rules?\nThe shipper uses a shipping paper and diamond-shaped hazard labels to warn dockworkers and drivers of the risk.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.23.2 - Why Are There Rules?\nОтправитель использует транспортную бумагу и ромбовидные опасные этикетки, чтобы предупредить рабочих на складе и водителей о риске.",
                "",
            ]
        }
    },

    {
        "id": 200,
        "text": {
            "en": "Which of these is not a type of retarder?",
            "ru": "Какой из перечисленных не является типом ретардера?"
        },
        "options": {
            "en": [
                "Electric",
                "Robotic ",
                "Hydraulic"
            ],
            "ru": [
                "Электрический",
                "Роботизированный ",
                "Гидравлический"
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.3.4 - Retarders\nThere are four basic types of retarders (exhaust, engine, hydraulic, and electric). All retarders can be turned on or off by the driver.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.3.4 - Retarders\nСуществует четыре основных типа ретардеров (выхлопные, двигательные, гидравлические и электрические). Все ретардеры могут быть включены или выключены водителем.",
                "",
            ]
        }
    },

    {
        "id": 201,
        "text": {
            "en": "The total weight of a powered unit, the trailer and the cargo is called?",
            "ru": "Общая масса силового агрегата, прицепа и груза называется:"
        },
        "options": {
            "en": [
                "Gross axle weight.",
                "Gross combination weight ",
                "Gross vehicle weight."
            ],
            "ru": [
                "Вес на общей оси.",
                "Общий вес комбинации ",
                "Общий вес транспортного средства."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 3.2.1 - Definitions you Should Know\nGross Combination Weight (GCW): The total weight of a combination of vehicles including the load.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 3.2.1 - Definitions you Should Know\nОбщая масса комбинации транспортных средств, включая груз.",
                "",
            ]
        }
    },

    {
        "id": 202,
        "text": {
            "en": "Freeway exits can be dangerous for commercial vehicles, at what speed should you enter the exit?",
            "ru": "Выезды с автомагистрали могут быть опасными для коммерческих транспортных средств, при какой скорости вы должны въезжать на выезд?"
        },
        "options": {
            "en": [
                "Whatever speed you feel comfortable with.",
                "Below the posted speed limit. ",
                "At the posted speed."
            ],
            "ru": [
                "Любой скоростью, с которой вы чувствуете себя комфортно.",
                "Ниже установленного предельного ограничения скорости. ",
                "С установленной предельной скоростью."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.8.2 - Hazardous Roads\nFreeway and turnpike exits can be particularly dangerous for commercial vehicles. Off ramps and on ramps often have speed limit signs posted. Remember, these speeds may be safe for automobiles, but may not be safe for larger vehicles or heavily loaded vehicles.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.8.2 - Hazardous Roads\nВыезды с автомагистрали и поворотные полосы могут быть особенно опасными для коммерческих транспортных средств. Часто на выездах и въездах установлены знаки с ограничением скорости. Помните, что эти скорости могут быть безопасными для автомобилей, но не обязательно безопасными для более крупных или тяжело загруженных транспортных средств.",
                "",
            ]
        }
    },

    {
        "id": 203,
        "text": {
            "en": "Which of these statements is true?",
            "ru": "Какое из следующих утверждений верно?"
        },
        "options": {
            "en": [
                "Most hazards are easier to see at night than during the day.",
                "Many heavy vehicle accidents occur between midnight and 6 a.m. ",
                "Most people are more alert at night than during the day."
            ],
            "ru": [
                "Большинство опасностей легче заметить ночью, чем днем.",
                "Множество аварий с участием тяжелых транспортных средств происходит между полуночью и 6 утра. ",
                "Большинство людей более бодры ночью, чем днем."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.11.2 - Driver Factors\nIf possible, try to schedule trips for the hours you are normally awake. Many heavy motor vehicle crashes occur between midnight and 6 a.m.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.11.2 - Driver Factors\nПри возможности старайтесь планировать поездки на часы, когда вы обычно бодрствуете. Множество аварий с участием тяжелых транспортных средств происходит между полуночью и 6 утра.",
                "",
            ]
        }
    },

    {
        "id": 204,
        "text": {
            "en": "Space to the __your vehicle is most important to manage.",
            "ru": "Пространство перед вашим транспортным средством наиболее важно для управления."
        },
        "options": {
            "en": [
                "Front of ",
                "To the side of",
                "Back of"
            ],
            "ru": [
                "Впереди ",
                "Сбоку",
                "Сзади"
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.7.1 - Space Ahead\nOf all the space around your vehicle, it is the area ahead of the vehicle, the space you're driving into, that is most important.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.7.1 - Space Ahead\nСреди всего пространства вокруг вашего транспортного средства наиболее важной является область впереди транспортного средства, пространство, в которое вы движетесь.",
                "",
                "",
            ]
        }
    },

    {
        "id": 205,
        "text": {
            "en": "Your brakes can get wet when driving through heavy rain. What can happen if the brakes are applied?",
            "ru": "Ваши тормоза могут промокнуть при движении под сильным дождем. Что может произойти, если тормоза будут применены?"
        },
        "options": {
            "en": [
                "Extensive brake wear.",
                "Hydroplaning.",
                "Trailer jack-knife. "
            ],
            "ru": [
                "Износ тормозов.",
                "Аквапланирование.",
                "Подъём прицепа в реакции на управление. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.13.2 - Driving on Slippery Surfaces\nWhen driving in heavy rain or deep standing water, your brakes will get wet. Water in the brakes can cause the brakes to be weak, to apply unevenly, or to grab. This can cause lack of braking power, wheel lockups, pulling to one side or the other, and jackknife if you pull a trailer.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.13.2 - Driving on Slippery Surfaces\nПри движении под сильным дождем или по глубокой стоячей воде ваши тормоза промокнут. Вода в тормозах может вызвать их ослабление, неравномерное прокачивание или захват. Это может привести к недостатку тормозной мощности, блокировке колес, дерганию в одну сторону или другую, а также к подъёму прицепа в реакции на управление, если вы везете прицеп.",
            ]
        }
    },

    {
        "id": 206,
        "text": {
            "en": "Which of the statements about an inspection of the suspension components is true?",
            "ru": "Какое из утверждений о проверке компонентов подвески верно?"
        },
        "options": {
            "en": [
                "Suspension components should be checked at all axles except for the following unit.",
                "Distorted springs are safe as long as they are not broken.",
                "Axles' mounts should be checked at each point where they are secured on the vehicle frame and axles. "
            ],
            "ru": [
                "Компоненты подвески должны быть проверены на всех осях, за исключением следующей единицы.",
                "Искривлённые пружины безопасны, пока они не сломаны.",
                "Крепления осей следует проверять в каждой точке, где они закреплены на раме и осях транспортного средства. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 11.3.2 - Suspension\nLook for cracked or broken spring hangers, missing or damaged bushings, and broken, loose, or missing bolts, u-bolts or other axle mounting parts. (The mounts should be checked at each point where they are secured to the vehicle frame and axle[s]).",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 11.3.2 - Suspension\nОбращайте внимание на треснутые или сломанные подвесные кронштейны, отсутствующие или поврежденные втулки и сломанные, разболтанные или отсутствующие болты, гайки или другие детали крепления оси. (Крепления следует проверять в каждой точке, где они закреплены на раме и осях транспортного средства).",
            ]
        }
    },

    {
        "id": 207,
        "text": {
            "en": "You are checking your brakes and suspension system for a pre-trip inspection. Which of these statements is true?",
            "ru": "Вы проверяете тормоза и систему подвески на предварительном осмотре перед поездкой. Какое из следующих утверждений верно?"
        },
        "options": {
            "en": [
                "Just one missing leaf in a leaf spring is not dangerous.",
                "Brake shoes should not have oil, grease, or brake fluid on them. ",
                "Spring hangers that are cracked but still tight are not dangerous."
            ],
            "ru": [
                "Пропущенный один лист в листовой пружине не представляет опасности.",
                "Тормозные колодки не должны иметь масла, смазки или тормозной жидкости на них. ",
                "Хомуты рессор, которые треснули, но всё ещё плотно держатся, не являются опасными."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.1.3 - What to Look For\nBad Brake Drums or Shoes: Shoes or pads with oil, grease, or brake fluid on them.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.1.3 - What to Look For\nПлохие тормозные барабаны или колодки: Колодки или накладки, покрытые маслом, смазкой или тормозной жидкостью.",
                "",
            ]
        }
    },

    {
        "id": 208,
        "text": {
            "en": "You do not have hazardous materials endorsement in your commercial driver license. You can drive a vehicle hauling hazardous materials when:",
            "ru": "У вас нет газонефтепродуктовой надписи (Hazmat endorsement) в вашей коммерческой водительской лицензии. Вы можете управлять транспортным средством, перевозящим опасные материалы, когда:"
        },
        "options": {
            "en": [
                "The load of the hazardous materials is 26 pounds or less.",
                "The person who has Hazmat endorsement drives with you.",
                "The vehicle does not require placards. "
            ],
            "ru": [
                "Масса груза опасных материалов составляет 26 фунтов или менее.",
                "Человек, имеющий газонефтепродуктовую надпись (Hazmat endorsement), едет с вами.",
                "Транспортное средство не требует плакатов. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.23.3 - Lists of Regulated Products\nNot all vehicles carrying hazardous materials need to have placards. The rules about placards are given in Section 9 of this manual. You can drive a vehicle that carries hazardous materials if it does not require placards. If it requires placards, you cannot drive it unless your driver license has the hazardous materials endorsement.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.23.3 - Lists of Regulated Products\nНе все транспортные средства, перевозящие опасные материалы, должны иметь плакаты. Правила о плакатах приведены в Разделе 9 этого руководства. Вы можете управлять транспортным средством, перевозящим опасные материалы, если оно не требует плакатов. Если оно требует плакатов, вы не можете управлять им, если в вашей водительской лицензии нет газонефтепродуктовой надписи.",
            ]
        }
    },

    {
        "id": 209,
        "text": {
            "en": "If you are convicted of driving a commercial vehicle under the influence of alcohol or drugs, you will lose your CDL for:",
            "ru": "Если вас признают виновным в управлении коммерческим транспортным средством в состоянии алкогольного или наркотического опьянения, вы лишитесь вашей коммерческой водительской лицензии (CDL) на:"
        },
        "options": {
            "en": [
                "2 years",
                "1 year ",
                "6 months"
            ],
            "ru": [
                "2 года",
                "1 год ",
                "6 месяцев"
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: Synopsis of Table 1 Section 383.51 Federal Motor Carrier Safety Administration\nSee table detailing punishments.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: Synopsis of Table 1 Section 383.51 Federal Motor Carrier Safety Administration\nСм. таблицу с подробными наказаниями.",
                "",
            ]
        }
    },

    {
        "id": 210,
        "text": {
            "en": "Which of these is true about hazardous materials:",
            "ru": "Какое из следующих утверждений верно относительно опасных материалов:"
        },
        "options": {
            "en": [
                "Any truck carrying any amount of hazardous materials must have placards.",
                "All hazardous materials present health and safety danger. ",
                "Any public road allows trucks, carrying hazardous materials if they are loaded correctly."
            ],
            "ru": [
                "Любой грузовик, перевозящий любое количество опасных материалов, должен иметь плакаты.",
                "Все опасные материалы представляют опасность для здоровья и безопасности. ",
                "Любая общественная дорога разрешает движение грузовиков, перевозящих опасные материалы, если они загружены правильно."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.23.1 - What are Hazardous Materials?\nHazardous materials are products that pose a risk to health, safety, and property during transportation.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.23.1 - What are Hazardous Materials?\nОпасные материалы - это продукты, представляющие риск для здоровья, безопасности и имущества во время транспортировки.",
                "",
            ]
        }
    },

    {
        "id": 211,
        "text": {
            "en": "You will be placed out of service for 24 hours if your blood alcohol concentration (BAC) is at least:",
            "ru": "Вас отправят на вынужденный перерыв на 24 часа, если концентрация алкоголя в крови (BAC) составляет хотя бы:"
        },
        "options": {
            "en": [
                "0.02.",
                "0.04.",
                "Any detectable amount. "
            ],
            "ru": [
                "0,02.",
                "0,04.",
                "Любое обнаруживаемое количество. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 1.3.2 - Suspension\nYou will be put out-of-service for 24 hours if you have any detectable amount of alcohol under .04 percent."
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 1.3.2 - Suspension\nВас отправят на вынужденный перерыв на 24 часа, если у вас есть обнаружимое количество алкоголя менее 0,04 процента."
            ]
        }
    },

    {
        "id": 212,
        "text": {
            "en": "What does emergency braking mean?",
            "ru": "Что означает экстренное торможение?"
        },
        "options": {
            "en": [
                "Using the vehicle emergency brakes.",
                "Responding to a hazard by slowing the vehicle. ",
                "Pushing down the brake pedal as hard as you can."
            ],
            "ru": [
                "Использование аварийных тормозов транспортного средства.",
                "Реакция на опасность путем замедления транспортного средства. ",
                "Нажатие на педаль тормоза так крепко, как только возможно."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.17.2 - How to Stop Quickly and Safely\nEmergency braking is the act of slowing down your vehicle using methods such as Controlled Braking and Stab Braking.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.17.2 - How to Stop Quickly and Safely\nЭкстренное торможение - это действие по замедлению вашего транспортного средства с использованием методов, таких как Контролируемое торможение и Торможение с рывками.",
                "",
            ]
        }
    },

    {
        "id": 213,
        "text": {
            "en": "You should try to park so that:",
            "ru": "Вы должны попытаться припарковаться так, чтобы:"
        },
        "options": {
            "en": [
                "Your vehicle is parked by trees.",
                "Park along the curb next to another vehicle.",
                "You can pull forward when you leave. "
            ],
            "ru": [
                "Ваше транспортное средство припарковано рядом с деревьями.",
                "Припарковаться вдоль бордюра рядом с другим транспортным средством.",
                "Вы могли выехать вперед, когда будете уезжать. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.2.4 - Backing Safely\nBecause you cannot see everything behind your vehicle, backing is always dangerous. Avoid backing whenever you can. When you park, try to park so you will be able to pull forward when you leave.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.2.4 - Backing Safely\nПоскольку вы не можете видеть всё, что находится за вашим транспортным средством, движение задним ходом всегда опасно. Избегайте движения задним ходом, когда это возможно. При парковке попытайтесь так припарковаться, чтобы вы могли выехать вперед, когда будете уезжать.",
            ]
        }
    },

    {
        "id": 214,
        "text": {
            "en": "Gross Vehicle Weight (GVW) means the following:",
            "ru": "Вес грузового транспортного средства (GVW) означает следующее:"
        },
        "options": {
            "en": [
                "Total weight of a single vehicle.",
                "Both.",
                "Total weight of a single vehicle plus its load. "
            ],
            "ru": [
                "Общий вес одного транспортного средства.",
                "Оба варианта.",
                "Общий вес одного транспортного средства вместе с его грузом. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 3.2.1 - Definitions you Should Know\nGross Vehicle Weight (GVW): The total weight of a single vehicle including its load.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 3.2.1 - Definitions you Should Know\nВес грузового транспортного средства (GVW): Общая масса одного транспортного средства включая его груз.",
            ]
        }
    },

    {
        "id": 215,
        "text": {
            "en": "After starting the engine:",
            "ru": "После запуска двигателя:"
        },
        "options": {
            "en": [
                "The engine temperature gauge will take 3-5 minutes to rise to normal.",
                "The oil pressure gauge should take 3-5 minutes to rise to normal.",
                "The coolant temperature gauge should begin a gradual rise to normal. "
            ],
            "ru": [
                "Показатель температуры двигателя потребует 3-5 минут, чтобы подняться до нормы.",
                "Показатель давления масла должен потребовать 3-5 минут, чтобы подняться до нормы.",
                "Показатель температуры охлаждающей жидкости должен начать постепенное увеличение до нормы. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.1.5 - Seven-step Inspection Method\nLook at the Gauges: Coolant temperature.\nShould begin gradual rise to normal operating range.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.5 - Seven-step Inspection Method\nОбратите внимание на показатели: температура охлаждающей жидкости.\nДолжна начать постепенно повышаться до нормального рабочего диапазона.",
            ]
        }
    },

    {
        "id": 216,
        "text": {
            "en": "Whenever you double your speed, your vehicle has about how many times of destructive power if it crashes?",
            "ru": "Всякий раз, когда вы удваиваете скорость, ваше транспортное средство обладает приблизительно во сколько раз большей разрушительной силой, если произойдет столкновение?"
        },
        "options": {
            "en": [
                "2",
                "3",
                "4 "
            ],
            "ru": [
                "2",
                "3",
                "4 "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.6.1 - Stopping Distance\nThe faster you drive, the greater the impact or striking power of your vehicle. Whenever you double your speed from 20 to 40 mph, the impact is four times greater.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.6.1 - Stopping Distance\nЧем быстрее вы едете, тем больше ударная сила вашего транспортного средства. Всякий раз, когда вы удваиваете скорость с 20 до 40 миль в час, воздействие увеличивается в четыре раза.",
            ]
        }
    },

    {
        "id": 217,
        "text": {
            "en": "If you do not have a CB-radio, what procedure should you follow at an accident scene?",
            "ru": "Если у вас нет CB-радио, какую процедуру вы должны выполнить на месте аварии?"
        },
        "options": {
            "en": [
                "Protect the area. ",
                "Notify the authorities.",
                "Care for the injured person."
            ],
            "ru": [
                "Защитить область. ",
                "Уведомить власти.",
                "Заботиться о пострадавшем."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.20.1 Protect the Area\nThe first thing to do at a crash scene is to keep another crash from happening in the same spot.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.20.1 Protect the Area\nПервое, что нужно сделать на месте аварии, это предотвратить возникновение еще одной аварии на том же участке дороги.",
                "",
                "",
            ]
        }
    },

    {
        "id": 218,
        "text": {
            "en": "If you have a heavy load that is slowing you down on an upgrade, you should:",
            "ru": "Если у вас есть тяжелая нагрузка, которая замедляет вас на подъеме, вы должны:"
        },
        "options": {
            "en": [
                "Exit the road until traffic is lighter.",
                "Drive on the shoulder, so others can pass your vehicle.",
                "Shift to a lower gear. "
            ],
            "ru": [
                "Съехать с дороги, пока движение не станет легче.",
                "Двигаться по обочине, чтобы другие могли обогнать ваше транспортное средство.",
                "Переключиться на более низкую передачу. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.16 - Mountain Driving\nIn mountain driving, gravity plays a major role. On any upgrade, gravity slows you down. The steeper the grade, the longer the grade, and/ or the heavier the load, the more you will have to use lower gears to climb hills or mountains.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.16 - Mountain Driving\nВ горной местности гравитация играет большую роль. На подъеме гравитация замедляет вас. Чем круче подъем, тем дольше подъем, и/или чем тяжелее нагрузка, тем больше вы должны будете использовать более низкие передачи, чтобы подниматься на холмах или горах.",
            ]
        }
    },

    {
        "id": 219,
        "text": {
            "en": "You should signal continuously while turning because:",
            "ru": "Вы должны давать постоянный сигнал поворота, потому что:"
        },
        "options": {
            "en": [
                "It is illegal to turn off your signal before completing the turn.",
                "Most vehicles have self-canceling signals.",
                "You need both hands on the wheel to turn safely. "
            ],
            "ru": [
                "Запрещено выключать сигнал поворота перед завершением поворота.",
                "У большинства автомобилей есть автоматическое выключение сигнала поворота.",
                "Вам нужны обе руки на руле для безопасного поворота. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.5.1 - Signal Your Intentions\nSignal Continuously: You need both hands on the wheel to turn safely. Do not cancel the signal until you have completed the turn.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.5.1 - Signal Your Intentions\nПостоянно давайте сигнал: вам нужны обе руки на руле для безопасного поворота. Не отменяйте сигнал до завершения поворота.",
            ]
        }
    },

    {
        "id": 220,
        "text": {
            "en": "Which of these should be tested while the vehicle is stopped?",
            "ru": "Что из перечисленного следует проверять, пока транспортное средство остановлено?"
        },
        "options": {
            "en": [
                "Hydraulic brakes. ",
                "Service brake.",
                "Parking brake."
            ],
            "ru": [
                "Гидравлические тормоза. ",
                "Служебный тормоз.",
                "Стояночный тормоз."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 11.2.2 - Cab Check/ Engine Start\nRead sections: Hydraulic Brake Check, Service Brake Check, and Parking Brake Check. Notice Hydraulic brake check requires the vehicle to be in a stopped position.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 11.2.2 - Cab Check/ Engine Start\nПрочитайте разделы: Проверка гидравлических тормозов, Проверка служебных тормозов и Проверка стояночного тормоза. Обратите внимание, что проверка гидравлических тормозов требует остановки транспортного средства.",
                "",
                "",
            ]
        }
    },

    {
        "id": 221,
        "text": {
            "en": "Which of these statements about alcohol is NOT true?",
            "ru": "Какое из следующих утверждений о спиртных напитках НЕ верно?"
        },
        "options": {
            "en": [
                "Alcohol goes directly from the stomach to the bloodstream.",
                "A drinker can control how fast his or her body absorbs alcohol. ",
                "BAC is determined by how fast you drink; how much you drink and how much you eat."
            ],
            "ru": [
                "Алкоголь напрямую переходит из желудка в кровь.",
                "Пьющий человек может контролировать, насколько быстро его организм усваивает алкоголь. ",
                "Количество потребляемого алкоголя, скорость его потребления и количество приемов пищи влияют на концентрацию алкоголя в крови (BAC)."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.22.1 - Alcohol and Driving\nAlcohol affects more and more of the brain as BAC builds up. The first part of the brain affected controls judgment and self-control. One of the bad things about this is it can keep drinkers from knowing they are getting drunk. And, of course, good judgment and self-control are absolutely necessary for safe driving.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.22.1 - Alcohol and Driving\nАлкоголь влияет на все большую часть мозга, по мере накопления концентрации алкоголя в крови (BAC). Первая часть мозга, которая подвергается воздействию, контролирует суждения и самоконтроль. Одна из плохих сторон этого заключается в том, что это может помешать пьющим людям осознать, что они опьяневают. И, конечно же, хорошее суждение и самоконтроль абсолютно необходимы для безопасного вождения.",
                "",
            ]
        }
    },

    {
        "id": 222,
        "text": {
            "en": "Overweight, oversized loads:",
            "ru": "Перегрузка, негабаритные грузы:"
        },
        "options": {
            "en": [
                "Require special permits. ",
                "Can only be driven during daylight.",
                "Must be accompanied by the police."
            ],
            "ru": [
                "Требуют специальных разрешений. ",
                "Могут быть перевозимы только в светлое время суток.",
                "Должны сопровождаться полицией."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 3.4.4 - Oversized Loads\nOver-length, over-width, and/or overweight loads require special transit permits. Driving is usually limited to certain times. Special equipment may be necessary such as \"wide load\" signs, flashing lights, flags, etc. Such loads may require a police escort or pilot vehicles bearing warning signs and/or flashing lights. These special loads require special driving care.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 3.4.4 - Oversized Loads\nГрузы, превышающие длину, ширину или массу, требуют специальных транспортных разрешений. Вождение обычно ограничивается определенным временем. Может потребоваться специальное оборудование, такое как знаки \"широкая нагрузка\", мигающие огоньки, флаги и т. д. Такие грузы могут потребовать сопровождения полиции или сопровождающих автомобилей с предупредительными знаками и/или мигающими огоньками. Эти специальные грузы требуют особой осторожности при вождении.",
                "",
                "",
            ]
        }
    },

    {
        "id": 223,
        "text": {
            "en": "Which of these statements about braking is true?",
            "ru": "Какое из следующих утверждений о торможении верно?"
        },
        "options": {
            "en": [
                "The faster or heavier the vehicle is, the more heat the brakes have to absorb to stop it. ",
                "Brake fade is not caused by heat.",
                "Heat increases brake responsiveness as the vehicle moves quickly."
            ],
            "ru": [
                "Чем быстрее или тяжелее транспортное средство, тем больше тепла тормоза должны поглотить, чтобы остановить его. ",
                "Опадание тормозных свойств не вызывается теплом.",
                "Тепло увеличивает отзывчивость тормозов при быстром движении транспортного средства."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.6.1 - Stopping Distance\nThe Effect of Vehicle Weight on Stopping Distance: The heavier the vehicle, the more work the brakes must do to stop it and the more heat they absorb.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.6.1 - Stopping Distance\nВлияние веса транспортного средства на тормозной путь: Чем тяжелее транспортное средство, тем больше работы тормозам необходимо проделать, чтобы остановить его, и тем больше тепла они поглощают.",
                "",
                "",
            ]
        }
    },

    {
        "id": 224,
        "text": {
            "en": "Which of these pieces of emergency equipment should always be carried in your vehicle?",
            "ru": "Какой из этих частей аварийного оборудования всегда должен находиться в вашем транспортном средстве?"
        },
        "options": {
            "en": [
                "First aid kit.",
                "Tire repair kit.",
                "Warning devices for parking vehicle."
            ],
            "ru": [
                "Аптечка первой помощи.",
                "Комплект для ремонта шин.",
                "Сигнальные устройства для стоянки транспортного средства."
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.1.3 -What to Look For\nVehicles must be equipped with emergency equipment. Look for: Warning devices for parked vehicles (for example, three reflective warning triangles or 6 fuses or 3 liquid burning flares).",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.1.3 - What to Look For\nТранспортные средства должны быть оборудованы аварийным оборудованием. Ищите: сигнальные устройства для припаркованных транспортных средств (например, три отражающих треугольника для предупреждения или 6 предохранителей или 3 жидких горящих сигнальных факела).",
            ]
        }
    },

    {
        "id": 225,
        "text": {
            "en": "If you have to make a vehicle inspection report you must sign it",
            "ru": "Если вам нужно составить отчет о проверке транспортного средства, вы должны подписать его:"
        },
        "options": {
            "en": [
                "Only when defects are noted that are certified to be repaired.",
                "When any defects are noted, whether they are certified to be repaired or not.",
                "Only when defects are noted that are certified to not need repair."
            ],
            "ru": [
                "Только когда отмечены дефекты, которые подлежат ремонту.",
                "Когда отмечены любые дефекты, независимо от того, подлежат ли они ремонту или нет. ",
                "Только когда отмечены дефекты, которые сертифицированы как не требующие ремонта."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.1.5 - 7-Step Inspection Method\nDrivers may have to make a vehicle inspection report in writing each day. The motor carrier must repair any items in the report that affect safety and certify on the report that repairs were made or were unnecessary. You must sign the report only if defects were noted and certified to be repaired or not needed to be repaired.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.1.5 - 7-Step Inspection Method\nВодители могут быть обязаны составлять отчет о проверке транспортного средства письменно каждый день. Грузовой перевозчик должен ремонтировать любые элементы, отмеченные в отчете, которые влияют на безопасность, и подтверждать в отчете, что ремонт был выполнен или не требовался. Вы должны подписать отчет только в том случае, если были отмечены дефекты и сертифицированы как подлежащие ремонту или не требующие ремонта.",
                "",
            ]
        }
    },

    {
        "id": 226,
        "text": {
            "en": "You must keep the papers about hauling hazardous materials:",
            "ru": "Вы должны хранить документы о перевозке опасных материалов:"
        },
        "options": {
            "en": [
                "In the glove compartment, which must be working.",
                "Under the driver's seat.",
                "In the pouch of the driver's door."
            ],
            "ru": [
                "В бардачке, который должен быть исправным.",
                "Под сиденьем водителя.",
                "В кармане двери водителя. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.23.2 - Why are There Rules?\nFirefighters and police can prevent or reduce the amount of damage or injury at the scene if they know what hazardous materials are being transported. Your life, and the lives of others, may depend on quickly locating the hazardous materials shipping papers. For that reason, you must identify shipping papers related to hazardous materials or keep them on top of other shipping papers. You must also keep shipping papers in or on: A pouch on the driver's door.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.23.2 - Why are There Rules?\nПожарные и полиция могут предотвратить или уменьшить ущерб или травмы на месте происшествия, если они знают, какие опасные материалы перевозятся. Ваша жизнь и жизни других могут зависеть от быстрого нахождения документов о перевозке опасных материалов. По этой причине вы должны определить документы о перевозке опасных материалов или держать их наверху других документов о перевозке. Вы также должны хранить документы о перевозке в или на: Кармане двери водителя.",
            ]
        }
    },

    {
        "id": 227,
        "text": {
            "en": "Which of these statements about rear drive wheel braking skid is true?",
            "ru": "Какое из следующих утверждений о блокировке задних колес торможением верно?"
        },
        "options": {
            "en": [
                "On a vehicle with a trailer, the trailer can push the towing vehicle sideways.",
                "Locked wheels usually have more traction than rolling wheels.",
                "Front wheels slide sideways to try to catch up with the rear wheels."
            ],
            "ru": [
                "На транспортном средстве с прицепом при торможении прицеп может толкнуть буксирующее транспортное средство вбок. ",
                "Заблокированные колеса обычно имеют больше сцепления, чем вращающиеся.",
                "Передние колеса скользят вбок, чтобы догнать задние колеса."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.19.1 - Drive-wheel Skids\nWith vehicles towing trailers, a drive-wheel skid can let the trailer push the towing vehicle sideways, causing a sudden jackknife.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.19.1 - Drive-wheel Skids\nНа транспортном средстве с прицепом, заблокированные задние колеса могут позволить прицепу толкнуть буксирующее транспортное средство вбок, что вызывает внезапное включение аварийного торможения.",
                "",
                "",
            ]
        }
    },

    {
        "id": 228,
        "text": {
            "en": "The best drivers are those who watch and prepare for hazards. This is called __ driving.",
            "ru": "Лучшие водители - те, кто следит и готовится к опасностям. Это называется __ вождением."
        },
        "options": {
            "en": [
                "Objective",
                "Defensive ",
                "Offensive"
            ],
            "ru": [
                "Объективное",
                "Оборонительное (дефенсивное) ",
                "Агрессивное (офенсивное)"
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.8.4 - Always Have a Plan\nYou look for the hazards to have time to plan a way out of any emergency. When you see a hazard, think about the emergencies that could develop and figure out what you would do. Always be prepared to take action based on your plans. In this way, you will be a prepared, defensive driver who will improve your own safety as well as the safety of all road users.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.8.4 - Always Have a Plan\nВы ищете опасности, чтобы успеть спланировать путь из любой аварийной ситуации. Когда вы видите опасность, думайте об авариях, которые могут возникнуть, и разработайте план действий. Всегда будьте готовы принимать меры на основе ваших планов. Таким образом, вы будете готовым, оборонительным водителем, который улучшит свою собственную безопасность, а также безопасность всех пользователей дороги.",
                "",
            ]
        }
    },

    {
        "id": 229,
        "text": {
            "en": "What is the term for a commercial vehicle habit of swinging wide on turns?",
            "ru": "Какой термин используется для обозначения привычное широкое раскачивание коммерческого транспортного средства при поворотах?"
        },
        "options": {
            "en": [
                "Off-tracking. ",
                "Wide rounding.",
                "Side winding."
            ],
            "ru": [
                "Отклонение от траектории (off-tracking). ",
                "Широкий поворот.",
                "Боковое перемещение."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 6.1.6 - Turn Wide\nWhen a vehicle goes around a corner, the rear wheels follow a different path than the front wheels. This is called offtracking or \"cheating.\"",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 6.1.6 - Turn Wide\nКогда транспортное средство движется вокруг угла, задние колеса следуют по другой траектории, чем передние колеса. Это называется отклонением от траектории или \"cheating\".",
                "",
                "",
            ]
        }
    },

    {
        "id": 230,
        "text": {
            "en": "You may hang up on a railroad track if:",
            "ru": "Вы можете застрять на железнодорожных путях, если:"
        },
        "options": {
            "en": [
                "The tracks have a steep approach. ",
                "If you cross the double tracks too slowly.",
                "You try to shift gears when crossing."
            ],
            "ru": [
                "Рельсы имеют крутой наклон. ",
                "Если вы пересекаете двойные пути слишком медленно.",
                "Вы пытаетесь переключить передачи во время переезда."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.15.5 - Crossing the Tracks\nRailroad crossings with steep approaches can cause your unit to hang up on the tracks.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.15.5 - Crossing the Tracks\nЖелезнодорожные переезды с крутыми подъездами могут заставить ваше транспортное средство застрять на рельсах.",
                "",
                "",
            ]
        }
    },

    {
        "id": 231,
        "text": {
            "en": "Which of these is true about radiator shutters and the winter-front during winter driving?",
            "ru": "Какое из следующих утверждений верно относительно радиаторных заслонок и передней решетки для зимнего времени во время вождения зимой?"
        },
        "options": {
            "en": [
                "Ice should be removed from the radiator shutter. ",
                "The winter front should be closed tightly.",
                "The engine may overheat if the winter front is left open."
            ],
            "ru": [
                "Лед должен быть удален с радиаторной заслонки. ",
                "Зимний передний борт должен быть плотно закрыт.",
                "Двигатель может перегреться, если передний борт оставлен открытым."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.13.1 - Vehicle Checks\nRemove ice from the radiator shutters. Make sure the winterfront is not closed too tightly. If the shutters freeze shut or the winterfront is closed too much, the engine may overheat and stop.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.13.1 - Vehicle Checks\nУдалите лед с радиаторных заслонок. Убедитесь, что передний борт для зимы не закрыт слишком плотно. Если заслонки замерзли или передний борт закрыт слишком плотно, двигатель может перегреться и остановиться.",
                "",
                "",
            ]
        }
    },

    {
        "id": 232,
        "text": {
            "en": "If you have a road emergency and must park on the shoulder, how soon should you put out your triangles?",
            "ru": "Если у вас возникла аварийная ситуация на дороге, и вам приходится парковаться на обочине, как быстро вы должны поставить свои треугольники?"
        },
        "options": {
            "en": [
                "Within 10 minutes. ",
                "Within 20 minutes.",
                "Within 15 minutes."
            ],
            "ru": [
                "В течение 10 минут. ",
                "В течение 20 минут.",
                "В течение 15 минут."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.5.2 - Communicating Your Presence\nIf you must stop on a road or the shoulder of any road, you must put out your emergency warning devices within ten minutes.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.5.2 - Communicating Your Presence\nЕсли вам нужно остановиться на дороге или на обочине любой дороги, вы должны поставить свои аварийные предупреждающие устройства в течение десяти минут.",
                "",
                "",
            ]
        }
    },

    {
        "id": 233,
        "text": {
            "en": "Which of these do not provide extra gears on some trucks?",
            "ru": "Какой из следующих вариантов не предоставляет дополнительные передачи на некоторых грузовиках?"
        },
        "options": {
            "en": [
                "Auxiliary transmission.",
                "Automatic transmission. ",
                "Multi-speed rear axles."
            ],
            "ru": [
                "Вспомогательная коробка передач.",
                "Автоматическая коробка передач. ",
                "Многоскоростные задние мосты."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.3.2 - Multi-Speed Rear Axles and Auxiliary Transmissions\nMulti-speed rear axles and auxiliary transmissions are used on many vehicles to provide extra gears.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.3.2 - Multi-Speed Rear Axles and Auxiliary Transmissions\nМногоскоростные задние мосты и вспомогательные коробки передач используются на многих транспортных средствах для предоставления дополнительных передач.",
                "",
            ]
        }
    },

    {
        "id": 234,
        "text": {
            "en": "Which of these is true about tire pressure?",
            "ru": "Какое из следующих утверждений верно относительно давления в шинах?"
        },
        "options": {
            "en": [
                "You do not have to check the hot tires because the tire is not blown out.",
                "Air pressure in tires increases with the temperature. ",
                "The pressure is not to be checked during the trip if it passed the pre-trip inspection."
            ],
            "ru": [
                "Вам не нужно проверять горячие шины, потому что шина не лопнула.",
                "Давление воздуха в шинах увеличивается с температурой. ",
                "Давление не должно проверяться во время поездки, если оно было проверено во время предварительной проверки."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.14.1 - Vehicle Checks\nCheck the tire mounting and air pressure. Inspect the tires every two hours or every 100 miles when driving in very hot weather. Air pressure increases with temperature.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.14.1 - Vehicle Checks\nПроверьте установку шин и давление воздуха. Проверяйте шины каждые два часа или каждые 100 миль в жаркую погоду. Давление воздуха увеличивается с температурой.",
                "",
            ]
        }
    },

    {
        "id": 235,
        "text": {
            "en": "What should you do if you are unsure whether you have enough overhead clearance?",
            "ru": "Что вы должны сделать, если вы не уверены, достаточно ли у вас высоты сверху?"
        },
        "options": {
            "en": [
                "Slow down slightly and try to drive under the object.",
                "Find another route that will not require driving under the object. ",
                "Estimate the height of the overhead object if it is not posted."
            ],
            "ru": [
                "Слегка замедлите и попробуйте проехать под объектом.",
                "Найдите другой маршрут, который не потребует движения под объектом. ",
                "Оцените высоту над головой объекта, если это не указано."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.7.4 - Space Overhead\nIf you doubt you have safe space to pass under an object, go slowly. If you are not sure you can make it, take another route. Warnings are often posted on low bridges or underpasses, but sometimes they are not.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.7.4 - Space Overhead\nЕсли вы сомневаетесь, что у вас есть безопасное пространство для проезда под объектом, двигайтесь медленно. Если вы не уверены, что сможете пройти, выберите другой маршрут. Предупреждения часто размещаются на низких мостах или путепроводах, но иногда их нет.",
                "",
            ]
        }
    },

    {
        "id": 236,
        "text": {
            "en": "What should you do when your vehicle hydroplanes?",
            "ru": "Что вы должны сделать, если ваше транспортное средство начинает скользить на воде (гидропланирование)?"
        },
        "options": {
            "en": [
                "Start stab braking.",
                "Release accelerator. ",
                "Accelerate slightly."
            ],
            "ru": [
                "Начать насильное торможение.",
                "Отпустить акселератор. ",
                "Слегка ускориться."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 2.6.2 - Matching Speed to the Road Surface\nIn some weather, water or slush collects on the road. When this happens, your vehicle can hydroplane. It is like water skiing, the tires lose their contact with the road and have little or no traction. You may not be able to steer or brake. You can regain control by releasing the accelerator and pushing in the clutch.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 2.6.2 - Matching Speed to the Road Surface\nВ некоторых погодных условиях на дороге собирается вода или слякоть. В таких случаях ваше транспортное средство может начать гидропланирование. Это подобно водному лыжному спорту, шины теряют контакт с дорогой и практически не имеют сцепления. Вам может не удаваться управлять или тормозить. Вы можете восстановить контроль, отпустив акселератор и нажав на сцепление.",
                "",
            ]
        }
    },

    {
        "id": 237,
        "text": {
            "en": "Which of these is true about tires and hot weather?",
            "ru": "Какое из следующих утверждений верно относительно шин и жаркой погоды?"
        },
        "options": {
            "en": [
                "If a tire is too hot to touch, you should drive on it to cool it off.",
                "A small amount of air could be let out, but air pressure remains stable.",
                "You should inspect your tires every two hours or every 100 miles when driving in very hot weather. "
            ],
            "ru": [
                "Если шина слишком горячая на ощупь, вы должны ехать на ней, чтобы она остыла.",
                "Небольшое количество воздуха можно выпустить, но давление воздуха остается стабильным.",
                "Вы должны проверять свои шины каждые два часа или каждые 100 миль при движении в очень жаркую погоду. "
            ]
        },
        "correctAnswerIndex": 2,
        "explanations": {
            "en": [
                "",
                "",
                "Section: 2.14.1 - Vehicle Checks\nCheck the tire mounting and air pressure. Inspect the tires every two hours or every 100 miles when driving in very hot weather.",
            ],
            "ru": [
                "",
                "",
                "Объяснение: Раздел: 2.14.1 - Vehicle Checks\nПроверьте крепление шин и давление воздуха. Проверяйте шины каждые два часа или каждые 100 миль при движении в очень жаркую погоду.",
            ]
        }
    },

    {
        "id": 238,
        "text": {
            "en": "Gross Vehicle Weight Rating (GVWR) means the following?",
            "ru": "Что означает показатель максимальной разрешенной массы транспортного средства (GVWR)?"
        },
        "options": {
            "en": [
                "The value specified by the manufacturer as the loaded weight of a single vehicle. ",
                "Maximum GVW specified by the manufacturer for a single vehicle.",
                "Maximum GVW specified by the manufacturer."
            ],
            "ru": [
                "Значение, указанное производителем как загруженная масса одного транспортного средства. ",
                "Максимальная GVW, указанная производителем для одного транспортного средства.",
                "Максимальная GVW, указанная производителем."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 3.2.1 - Definitions you Should Know\nGross Vehicle Weight Rating (GVWR): The value specified by the manufacturer as the loaded weight of a single vehicle.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 3.2.1 - Definitions you Should Know\nПоказатель максимальной разрешенной массы транспортного средства (GVWR): Значение, указанное производителем как загруженная масса одного транспортного средства.",
                "",
                "",
            ]
        }
    },

    {
        "id": 239,
        "text": {
            "en": "The value specified by the manufacturer as the loaded weight of a combination vehicle is?",
            "ru": "Значение, указанное производителем как загруженная масса комбинированного транспортного средства - это:"
        },
        "options": {
            "en": [
                "Gross Combination Weight.",
                "Gross Combination Weight Rating. ",
                "Gross Vehicle Weight Rating."
            ],
            "ru": [
                "Максимально допустимая масса комбинированного транспортного средства.",
                "Максимальная масса комбинированного транспортного средства. ",
                "Максимальная разрешенная масса транспортного средства."
            ]
        },
        "correctAnswerIndex": 1,
        "explanations": {
            "en": [
                "",
                "Section: 3.2.1 - Definitions you Should Know\nGross Combination Weight Rating (GCWR): The value specified by the manufacturer as the loaded weight of a combination (articulated) vehicle.",
                "",
            ],
            "ru": [
                "",
                "Объяснение: Раздел: 3.2.1 - Definitions you Should Know\nПоказатель максимальной массы комбинированного транспортного средства (GCWR): Значение, указанное производителем как загруженная масса комбинированного (соединенного) транспортного средства.",
                "",
            ]
        }
    },

    {
        "id": 240,
        "text": {
            "en": "To avoid an accident you moved to the shoulder. The shoulder is clear, you should:",
            "ru": "Чтобы избежать аварии, вы переключились на обочину. Обочина свободна, вы должны:"
        },
        "options": {
            "en": [
                "Stay on the shoulder until your vehicle has come to a stop. ",
                "Using mirrors and turn signals, turn sharply to get back to the road.",
                "Ride on the shoulder to the next exit and then re-enter the road."
            ],
            "ru": [
                "Оставайтесь на обочине, пока ваше транспортное средство полностью не остановится. ",
                "Используя зеркала и указатели поворотов, резко поворачивайте, чтобы вернуться на дорогу.",
                "Ездите на обочине до следующего выхода, а затем вернитесь на дорогу."
            ]
        },
        "correctAnswerIndex": 0,
        "explanations": {
            "en": [
                "Section: 2.17.1 - Steering to Avoid a Crash\nStay on the Shoulder: If the shoulder is clear, stay on it until your vehicle has come to a stop. Signal and check your mirrors before pulling back onto the road.",
                "",
                "",
            ],
            "ru": [
                "Объяснение: Раздел: 2.17.1 - Steering to Avoid a Crash\nОставайтесь на обочине: Если обочина свободна, оставайтесь на ней, пока ваше транспортное средство полностью не остановится. Дайте сигнал и проверьте зеркала, прежде чем вернуться на дорогу.",
                "",
                "",
            ]
        }
    },
];

export default questions;
