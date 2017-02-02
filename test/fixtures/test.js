test('reducers', () => {
    let state;
    state = reducers({
        user: false,
        movies: [],
        error: '',
        favorites: []
    }, {
        type: 'ADD_MOVIES',
        data: {
            page: 1,
            results: [
                {
                    poster_path: '/ylXCdC106IKiarftHkcacasaAcb.jpg',
                    adult: false,
                    overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
                    release_date: '2016-12-01',
                    genre_ids: [
                        10749, 35, 18, 10402
                    ],
                    id: 313369,
                    original_title: 'La La Land',
                    original_language: 'en',
                    title: 'La La Land',
                    backdrop_path: '/fp6X6yhgcxzxCpmM0EVC6V9B8XB.jpg',
                    popularity: 112.475315,
                    vote_count: 839,
                    video: false,
                    vote_average: 8.1
                }, {
                    poster_path: '/tIKFBxBZhSXpIITiiB5Ws8VGXjt.jpg',
                    adult: false,
                    overview: 'Lynch discovers he is a descendant of the secret Assassins society through unlocked genetic memories that allow him to relive the adventures of his ancestor, Aguilar, in 15th Century Spain. After gaining incredible knowledge and skills he’s poised to take on the oppressive Knights Templar in the present day.  hdghdgd',
                    release_date: '2016-12-21',
                    genre_ids: [
                        28, 12, 14, 878
                    ],
                    id: 121856,
                    original_title: 'Assassin\'s Creed',
                    original_language: 'en',
                    title: 'Assassin\'s Creed',
                    backdrop_path: '/r8aRipzR4wlDx0m7Bpi43Q84imc.jpg',
                    popularity: 74.595346,
                    vote_count: 849,
                    video: false,
                    vote_average: 5.2
                }, {
                    poster_path: '/uSHjeRVuObwdpbECaXJnvyDoeJK.jpg',
                    adult: false,
                    overview: 'A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.',
                    release_date: '2016-09-28',
                    genre_ids: [14],
                    id: 283366,
                    original_title: 'Miss Peregrine\'s Home for Peculiar Children',
                    original_language: 'en',
                    title: 'Miss Peregrine\'s Home for Peculiar Children',
                    backdrop_path: '/9BVHn78oQcFCRd4M3u3NT7OrhTk.jpg',
                    popularity: 64.324264,
                    vote_count: 1195,
                    video: false,
                    vote_average: 6.3
                }, {
                    poster_path: '/xGgg2UI20qtEh7mura3RRwP8d3I.jpg',
                    adult: false,
                    overview: 'Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.',
                    release_date: '2016-11-10',
                    genre_ids: [
                        18, 878
                    ],
                    id: 329865,
                    original_title: 'Arrival',
                    original_language: 'en',
                    title: 'Arrival',
                    backdrop_path: '/yIZ1xendyqKvY3FGeeUYUd5X9Mm.jpg',
                    popularity: 52.182831,
                    vote_count: 1435,
                    video: false,
                    vote_average: 6.7
                }, {
                    poster_path: '/yNsdyNbQqaKN0TQxkHMws2KLTJ6.jpg',
                    adult: false,
                    overview: 'Extreme athlete turned government operative Xander Cage (Vin Diesel) comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang (Donnie Yen) and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora\'s Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.',
                    release_date: '2017-01-13',
                    genre_ids: [
                        28, 12, 80, 53
                    ],
                    id: 47971,
                    original_title: 'xXx: Return of Xander Cage',
                    original_language: 'en',
                    title: 'xXx: Return of Xander Cage',
                    backdrop_path: '/6AewnVY9zBgVQEuCufLvsufeRcH.jpg',
                    popularity: 47.212218,
                    vote_count: 209,
                    video: false,
                    vote_average: 5.3
                }, {
                    poster_path: '/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg',
                    adult: false,
                    overview: 'Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him—as well as everyone around him—as the walls between his compartments shatter apart.',
                    release_date: '2017-01-19',
                    genre_ids: [
                        18, 27, 53
                    ],
                    id: 381288,
                    original_title: 'Split',
                    original_language: 'en',
                    title: 'Split',
                    backdrop_path: '/dLsIMcH5ObsQqReQwH3RQCi4mnM.jpg',
                    popularity: 34.649833,
                    vote_count: 252,
                    video: false,
                    vote_average: 6.5
                }, {
                    poster_path: '/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg',
                    adult: false,
                    overview: 'A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.',
                    release_date: '2016-12-14',
                    genre_ids: [
                        28, 12, 14, 878
                    ],
                    id: 330459,
                    original_title: 'Rogue One: A Star Wars Story',
                    original_language: 'en',
                    title: 'Rogue One: A Star Wars Story',
                    backdrop_path: '/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg',
                    popularity: 29.29274,
                    vote_count: 1976,
                    video: false,
                    vote_average: 7.2
                }, {
                    poster_path: '/nHXiMnWUAUba2LZ0dFkNDVdvJ1o.jpg',
                    adult: false,
                    overview: 'Vampire death dealer Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.',
                    release_date: '2016-12-01',
                    genre_ids: [
                        28, 27
                    ],
                    id: 346672,
                    original_title: 'Underworld: Blood Wars',
                    original_language: 'en',
                    title: 'Underworld: Blood Wars',
                    backdrop_path: '/PIXSMakrO3s2dqA7mCvAAoVR0E.jpg',
                    popularity: 25.491128,
                    vote_count: 650,
                    video: false,
                    vote_average: 4.2
                }, {
                    poster_path: '/z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg',
                    adult: false,
                    overview: 'In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain\'s daughter\'s island, she answers the Ocean\'s call to seek out the demigod to set things right.',
                    release_date: '2016-11-23',
                    genre_ids: [
                        12, 16, 35, 10751, 14
                    ],
                    id: 277834,
                    original_title: 'Moana',
                    original_language: 'en',
                    title: 'Moana',
                    backdrop_path: '/1qGzqGUd1pa05aqYXGSbLkiBlLB.jpg',
                    popularity: 24.470932,
                    vote_count: 1073,
                    video: false,
                    vote_average: 6.5
                }, {
                    poster_path: '/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg',
                    adult: false,
                    overview: 'A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.',
                    release_date: '2016-12-21',
                    genre_ids: [
                        12, 18, 10749, 878
                    ],
                    id: 274870,
                    original_title: 'Passengers',
                    original_language: 'en',
                    title: 'Passengers',
                    backdrop_path: '/5EW4TR3fWEqpKsWysNcBMtz9Sgp.jpg',
                    popularity: 23.325788,
                    vote_count: 907,
                    video: false,
                    vote_average: 6.3
                }, {
                    poster_path: '/uwNNLJULvTQfgc3PBZAY92EOJQO.jpg',
                    adult: false,
                    overview: 'Julia becomes worried about her boyfriend, Holt when he explores the dark urban legend of a mysterious videotape said to kill the watcher seven days after viewing. She sacrifices herself to save her boyfriend and in doing so makes a horrifying discovery: there is a "movie within the movie" that no one has ever seen before.',
                    release_date: '2017-02-01',
                    genre_ids: [27],
                    id: 14564,
                    original_title: 'Rings',
                    original_language: 'en',
                    title: 'Rings',
                    backdrop_path: '/91WPDonXsxRzi7AcfedKM3p3NFU.jpg',
                    popularity: 18.510554,
                    vote_count: 77,
                    video: false,
                    vote_average: 5.3
                }, {
                    poster_path: '/bndiUFfJxNd2fYx8XO610L9a07m.jpg',
                    adult: false,
                    overview: 'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to win the Congressional Medal of Honor.',
                    release_date: '2016-11-04',
                    genre_ids: [
                        18, 36, 10752
                    ],
                    id: 324786,
                    original_title: 'Hacksaw Ridge',
                    original_language: 'en',
                    title: 'Hacksaw Ridge',
                    backdrop_path: '/zBK4QZONMQXhcgaJv1YYTdCW7q9.jpg',
                    popularity: 12.05174,
                    vote_count: 421,
                    video: false,
                    vote_average: 7.1
                }, {
                    poster_path: '/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg',
                    adult: false,
                    overview: 'The incredible untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson - brilliant African-American women working at NASA, who served as the brains behind one of the greatest operations in history: the launch of astronaut John Glenn into orbit, a stunning achievement that restored the nation\'s confidence, turned around the Space Race, and galvanized the world. The visionary trio crossed all gender and race lines to inspire generations to dream big.',
                    release_date: '2016-12-25',
                    genre_ids: [18],
                    id: 381284,
                    original_title: 'Hidden Figures',
                    original_language: 'en',
                    title: 'Hidden Figures',
                    backdrop_path: '/vifqDyPOB6jd5vwP2SIqWNtXUHu.jpg',
                    popularity: 11.057535,
                    vote_count: 197,
                    video: false,
                    vote_average: 7.7
                }, {
                    poster_path: '/5XFchtGifv8mz4qlyT8PZ7ZsjfG.jpg',
                    adult: false,
                    overview: 'A koala named Buster recruits his best friend to help him drum up business for his theater by hosting a singing competition.',
                    release_date: '2016-12-08',
                    genre_ids: [
                        16, 35, 10751, 10402
                    ],
                    id: 335797,
                    original_title: 'Sing',
                    original_language: 'en',
                    title: 'Sing',
                    backdrop_path: '/fxDXp8un4qNY9b1dLd7SH6CKzC.jpg',
                    popularity: 10.197419,
                    vote_count: 384,
                    video: false,
                    vote_average: 6.5
                }, {
                    poster_path: '/6YOrNBdoXvT8aC5VPLkkN6t5z0V.jpg',
                    adult: false,
                    overview: 'A divorced dad and his ex-con brother resort to a desperate scheme in order to save their family\'s farm in West Texas.',
                    release_date: '2016-08-12',
                    genre_ids: [
                        37, 80, 18
                    ],
                    id: 338766,
                    original_title: 'Hell or High Water',
                    original_language: 'en',
                    title: 'Hell or High Water',
                    backdrop_path: '/5GbRKOQSY08U3SQXXcQAKEnL2rE.jpg',
                    popularity: 8.994495,
                    vote_count: 445,
                    video: false,
                    vote_average: 7.1
                }, {
                    poster_path: '/qAwFbszz0kRyTuXmMeKQZCX3Q2O.jpg',
                    adult: false,
                    overview: 'The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.',
                    release_date: '2016-09-10',
                    genre_ids: [18],
                    id: 376867,
                    original_title: 'Moonlight',
                    original_language: 'en',
                    title: 'Moonlight',
                    backdrop_path: '/1ytaxWeVHDYtb7KPkrn3GNtDJdF.jpg',
                    popularity: 8.960485,
                    vote_count: 120,
                    video: false,
                    vote_average: 7.8
                }, {
                    poster_path: '/9Moizj8qxcZK6DqEE1MTO3pQAEw.jpg',
                    adult: false,
                    overview: 'A woman named Susan receives a book manuscript from her ex-husband — a man she left 20 years earlier — asking for her opinion of his writing. As she reads, she is drawn into the fictional life of Tony Hastings, a math professor whose family vacation turns violent.',
                    release_date: '2016-11-04',
                    genre_ids: [
                        18, 53
                    ],
                    id: 340666,
                    original_title: 'Nocturnal Animals',
                    original_language: 'en',
                    title: 'Nocturnal Animals',
                    backdrop_path: '/wVD5IdqGNFYGFzO3qcxj6GhRR3H.jpg',
                    popularity: 8.842054,
                    vote_count: 428,
                    video: false,
                    vote_average: 7
                }, {
                    poster_path: '/xq1Ugd62d23K2knRUx6xxuALTZB.jpg',
                    adult: false,
                    overview: 'The "story of miracles and love" revolves around Mitsuha and Taki. Mitsuha is a female high school student who lives in a rural town nestled deep in the mountains. Taki is a male high school student who lives in central Tokyo. One day, Mitsuha has a dream where she is a young man in Tokyo. Taki also has a dream where he is a female high school student in a town in the mountains that he has never been to. What is the secret to their dreams of personal experience?',
                    release_date: '2016-08-26',
                    genre_ids: [
                        878, 16, 18, 14, 10749
                    ],
                    id: 372058,
                    original_title: '君の名は。',
                    original_language: 'ja',
                    title: 'Your Name.',
                    backdrop_path: '/7OMAfDJikBxItZBIug0NJig5DHD.jpg',
                    popularity: 8.492248,
                    vote_count: 95,
                    video: false,
                    vote_average: 8.9
                }, {
                    poster_path: '/i0t7F6b4R1wURRESAiw9VJNuVoV.jpg',
                    adult: false,
                    overview: 'After his older brother passes away, Lee Chandler is forced to return home to care for his 16-year-old nephew. There he is compelled to deal with a tragic past that separated him from his family and the community where he was born and raised.',
                    release_date: '2016-11-18',
                    genre_ids: [18],
                    id: 334541,
                    original_title: 'Manchester by the Sea',
                    original_language: 'en',
                    title: 'Manchester by the Sea',
                    backdrop_path: '/urSqvE0AyIHkYogUsQaVAmZrN0M.jpg',
                    popularity: 8.480629,
                    vote_count: 192,
                    video: false,
                    vote_average: 7.8
                }, {
                    poster_path: '/7xbm3OTScvBEfnnpny9JPNWqPlw.jpg',
                    adult: false,
                    overview: 'A boy attempts to deal with his mother\'s illness and the bullying of his classmates by escaping to a fantastical world.',
                    release_date: '2016-10-07',
                    genre_ids: [
                        18, 14
                    ],
                    id: 258230,
                    original_title: 'A Monster Calls',
                    original_language: 'en',
                    title: 'A Monster Calls',
                    backdrop_path: '/xVW8REyVqKwxAtUYY07UGlZH43L.jpg',
                    popularity: 7.77117,
                    vote_count: 175,
                    video: false,
                    vote_average: 6.7
                }
            ],
            dates: {
                maximum: '2017-02-08',
                minimum: '2016-12-28'
            },
            total_pages: 35,
            total_results: 697
        }
    });
    expect(state).toEqual({
        user: false,
        movies: {
            page: 1,
            results: [
                {
                    poster_path: '/ylXCdC106IKiarftHkcacasaAcb.jpg',
                    adult: false,
                    overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
                    release_date: '2016-12-01',
                    genre_ids: [
                        10749, 35, 18, 10402
                    ],
                    id: 313369,
                    original_title: 'La La Land',
                    original_language: 'en',
                    title: 'La La Land',
                    backdrop_path: '/fp6X6yhgcxzxCpmM0EVC6V9B8XB.jpg',
                    popularity: 112.475315,
                    vote_count: 839,
                    video: false,
                    vote_average: 8.1
                }, {
                    poster_path: '/tIKFBxBZhSXpIITiiB5Ws8VGXjt.jpg',
                    adult: false,
                    overview: 'Lynch discovers he is a descendant of the secret Assassins society through unlocked genetic memories that allow him to relive the adventures of his ancestor, Aguilar, in 15th Century Spain. After gaining incredible knowledge and skills he’s poised to take on the oppressive Knights Templar in the present day.  hdghdgd',
                    release_date: '2016-12-21',
                    genre_ids: [
                        28, 12, 14, 878
                    ],
                    id: 121856,
                    original_title: 'Assassin\'s Creed',
                    original_language: 'en',
                    title: 'Assassin\'s Creed',
                    backdrop_path: '/r8aRipzR4wlDx0m7Bpi43Q84imc.jpg',
                    popularity: 74.595346,
                    vote_count: 849,
                    video: false,
                    vote_average: 5.2
                }, {
                    poster_path: '/uSHjeRVuObwdpbECaXJnvyDoeJK.jpg',
                    adult: false,
                    overview: 'A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.',
                    release_date: '2016-09-28',
                    genre_ids: [14],
                    id: 283366,
                    original_title: 'Miss Peregrine\'s Home for Peculiar Children',
                    original_language: 'en',
                    title: 'Miss Peregrine\'s Home for Peculiar Children',
                    backdrop_path: '/9BVHn78oQcFCRd4M3u3NT7OrhTk.jpg',
                    popularity: 64.324264,
                    vote_count: 1195,
                    video: false,
                    vote_average: 6.3
                }, {
                    poster_path: '/xGgg2UI20qtEh7mura3RRwP8d3I.jpg',
                    adult: false,
                    overview: 'Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.',
                    release_date: '2016-11-10',
                    genre_ids: [
                        18, 878
                    ],
                    id: 329865,
                    original_title: 'Arrival',
                    original_language: 'en',
                    title: 'Arrival',
                    backdrop_path: '/yIZ1xendyqKvY3FGeeUYUd5X9Mm.jpg',
                    popularity: 52.182831,
                    vote_count: 1435,
                    video: false,
                    vote_average: 6.7
                }, {
                    poster_path: '/yNsdyNbQqaKN0TQxkHMws2KLTJ6.jpg',
                    adult: false,
                    overview: 'Extreme athlete turned government operative Xander Cage (Vin Diesel) comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang (Donnie Yen) and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora\'s Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.',
                    release_date: '2017-01-13',
                    genre_ids: [
                        28, 12, 80, 53
                    ],
                    id: 47971,
                    original_title: 'xXx: Return of Xander Cage',
                    original_language: 'en',
                    title: 'xXx: Return of Xander Cage',
                    backdrop_path: '/6AewnVY9zBgVQEuCufLvsufeRcH.jpg',
                    popularity: 47.212218,
                    vote_count: 209,
                    video: false,
                    vote_average: 5.3
                }, {
                    poster_path: '/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg',
                    adult: false,
                    overview: 'Though Kevin has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher, there remains one still submerged who is set to materialize and dominate all the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him—as well as everyone around him—as the walls between his compartments shatter apart.',
                    release_date: '2017-01-19',
                    genre_ids: [
                        18, 27, 53
                    ],
                    id: 381288,
                    original_title: 'Split',
                    original_language: 'en',
                    title: 'Split',
                    backdrop_path: '/dLsIMcH5ObsQqReQwH3RQCi4mnM.jpg',
                    popularity: 34.649833,
                    vote_count: 252,
                    video: false,
                    vote_average: 6.5
                }, {
                    poster_path: '/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg',
                    adult: false,
                    overview: 'A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.',
                    release_date: '2016-12-14',
                    genre_ids: [
                        28, 12, 14, 878
                    ],
                    id: 330459,
                    original_title: 'Rogue One: A Star Wars Story',
                    original_language: 'en',
                    title: 'Rogue One: A Star Wars Story',
                    backdrop_path: '/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg',
                    popularity: 29.29274,
                    vote_count: 1976,
                    video: false,
                    vote_average: 7.2
                }, {
                    poster_path: '/nHXiMnWUAUba2LZ0dFkNDVdvJ1o.jpg',
                    adult: false,
                    overview: 'Vampire death dealer Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.',
                    release_date: '2016-12-01',
                    genre_ids: [
                        28, 27
                    ],
                    id: 346672,
                    original_title: 'Underworld: Blood Wars',
                    original_language: 'en',
                    title: 'Underworld: Blood Wars',
                    backdrop_path: '/PIXSMakrO3s2dqA7mCvAAoVR0E.jpg',
                    popularity: 25.491128,
                    vote_count: 650,
                    video: false,
                    vote_average: 4.2
                }, {
                    poster_path: '/z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg',
                    adult: false,
                    overview: 'In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain\'s daughter\'s island, she answers the Ocean\'s call to seek out the demigod to set things right.',
                    release_date: '2016-11-23',
                    genre_ids: [
                        12, 16, 35, 10751, 14
                    ],
                    id: 277834,
                    original_title: 'Moana',
                    original_language: 'en',
                    title: 'Moana',
                    backdrop_path: '/1qGzqGUd1pa05aqYXGSbLkiBlLB.jpg',
                    popularity: 24.470932,
                    vote_count: 1073,
                    video: false,
                    vote_average: 6.5
                }, {
                    poster_path: '/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg',
                    adult: false,
                    overview: 'A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.',
                    release_date: '2016-12-21',
                    genre_ids: [
                        12, 18, 10749, 878
                    ],
                    id: 274870,
                    original_title: 'Passengers',
                    original_language: 'en',
                    title: 'Passengers',
                    backdrop_path: '/5EW4TR3fWEqpKsWysNcBMtz9Sgp.jpg',
                    popularity: 23.325788,
                    vote_count: 907,
                    video: false,
                    vote_average: 6.3
                }, {
                    poster_path: '/uwNNLJULvTQfgc3PBZAY92EOJQO.jpg',
                    adult: false,
                    overview: 'Julia becomes worried about her boyfriend, Holt when he explores the dark urban legend of a mysterious videotape said to kill the watcher seven days after viewing. She sacrifices herself to save her boyfriend and in doing so makes a horrifying discovery: there is a "movie within the movie" that no one has ever seen before.',
                    release_date: '2017-02-01',
                    genre_ids: [27],
                    id: 14564,
                    original_title: 'Rings',
                    original_language: 'en',
                    title: 'Rings',
                    backdrop_path: '/91WPDonXsxRzi7AcfedKM3p3NFU.jpg',
                    popularity: 18.510554,
                    vote_count: 77,
                    video: false,
                    vote_average: 5.3
                }, {
                    poster_path: '/bndiUFfJxNd2fYx8XO610L9a07m.jpg',
                    adult: false,
                    overview: 'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to win the Congressional Medal of Honor.',
                    release_date: '2016-11-04',
                    genre_ids: [
                        18, 36, 10752
                    ],
                    id: 324786,
                    original_title: 'Hacksaw Ridge',
                    original_language: 'en',
                    title: 'Hacksaw Ridge',
                    backdrop_path: '/zBK4QZONMQXhcgaJv1YYTdCW7q9.jpg',
                    popularity: 12.05174,
                    vote_count: 421,
                    video: false,
                    vote_average: 7.1
                }, {
                    poster_path: '/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg',
                    adult: false,
                    overview: 'The incredible untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson - brilliant African-American women working at NASA, who served as the brains behind one of the greatest operations in history: the launch of astronaut John Glenn into orbit, a stunning achievement that restored the nation\'s confidence, turned around the Space Race, and galvanized the world. The visionary trio crossed all gender and race lines to inspire generations to dream big.',
                    release_date: '2016-12-25',
                    genre_ids: [18],
                    id: 381284,
                    original_title: 'Hidden Figures',
                    original_language: 'en',
                    title: 'Hidden Figures',
                    backdrop_path: '/vifqDyPOB6jd5vwP2SIqWNtXUHu.jpg',
                    popularity: 11.057535,
                    vote_count: 197,
                    video: false,
                    vote_average: 7.7
                }, {
                    poster_path: '/5XFchtGifv8mz4qlyT8PZ7ZsjfG.jpg',
                    adult: false,
                    overview: 'A koala named Buster recruits his best friend to help him drum up business for his theater by hosting a singing competition.',
                    release_date: '2016-12-08',
                    genre_ids: [
                        16, 35, 10751, 10402
                    ],
                    id: 335797,
                    original_title: 'Sing',
                    original_language: 'en',
                    title: 'Sing',
                    backdrop_path: '/fxDXp8un4qNY9b1dLd7SH6CKzC.jpg',
                    popularity: 10.197419,
                    vote_count: 384,
                    video: false,
                    vote_average: 6.5
                }, {
                    poster_path: '/6YOrNBdoXvT8aC5VPLkkN6t5z0V.jpg',
                    adult: false,
                    overview: 'A divorced dad and his ex-con brother resort to a desperate scheme in order to save their family\'s farm in West Texas.',
                    release_date: '2016-08-12',
                    genre_ids: [
                        37, 80, 18
                    ],
                    id: 338766,
                    original_title: 'Hell or High Water',
                    original_language: 'en',
                    title: 'Hell or High Water',
                    backdrop_path: '/5GbRKOQSY08U3SQXXcQAKEnL2rE.jpg',
                    popularity: 8.994495,
                    vote_count: 445,
                    video: false,
                    vote_average: 7.1
                }, {
                    poster_path: '/qAwFbszz0kRyTuXmMeKQZCX3Q2O.jpg',
                    adult: false,
                    overview: 'The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.',
                    release_date: '2016-09-10',
                    genre_ids: [18],
                    id: 376867,
                    original_title: 'Moonlight',
                    original_language: 'en',
                    title: 'Moonlight',
                    backdrop_path: '/1ytaxWeVHDYtb7KPkrn3GNtDJdF.jpg',
                    popularity: 8.960485,
                    vote_count: 120,
                    video: false,
                    vote_average: 7.8
                }, {
                    poster_path: '/9Moizj8qxcZK6DqEE1MTO3pQAEw.jpg',
                    adult: false,
                    overview: 'A woman named Susan receives a book manuscript from her ex-husband — a man she left 20 years earlier — asking for her opinion of his writing. As she reads, she is drawn into the fictional life of Tony Hastings, a math professor whose family vacation turns violent.',
                    release_date: '2016-11-04',
                    genre_ids: [
                        18, 53
                    ],
                    id: 340666,
                    original_title: 'Nocturnal Animals',
                    original_language: 'en',
                    title: 'Nocturnal Animals',
                    backdrop_path: '/wVD5IdqGNFYGFzO3qcxj6GhRR3H.jpg',
                    popularity: 8.842054,
                    vote_count: 428,
                    video: false,
                    vote_average: 7
                }, {
                    poster_path: '/xq1Ugd62d23K2knRUx6xxuALTZB.jpg',
                    adult: false,
                    overview: 'The "story of miracles and love" revolves around Mitsuha and Taki. Mitsuha is a female high school student who lives in a rural town nestled deep in the mountains. Taki is a male high school student who lives in central Tokyo. One day, Mitsuha has a dream where she is a young man in Tokyo. Taki also has a dream where he is a female high school student in a town in the mountains that he has never been to. What is the secret to their dreams of personal experience?',
                    release_date: '2016-08-26',
                    genre_ids: [
                        878, 16, 18, 14, 10749
                    ],
                    id: 372058,
                    original_title: '君の名は。',
                    original_language: 'ja',
                    title: 'Your Name.',
                    backdrop_path: '/7OMAfDJikBxItZBIug0NJig5DHD.jpg',
                    popularity: 8.492248,
                    vote_count: 95,
                    video: false,
                    vote_average: 8.9
                }, {
                    poster_path: '/i0t7F6b4R1wURRESAiw9VJNuVoV.jpg',
                    adult: false,
                    overview: 'After his older brother passes away, Lee Chandler is forced to return home to care for his 16-year-old nephew. There he is compelled to deal with a tragic past that separated him from his family and the community where he was born and raised.',
                    release_date: '2016-11-18',
                    genre_ids: [18],
                    id: 334541,
                    original_title: 'Manchester by the Sea',
                    original_language: 'en',
                    title: 'Manchester by the Sea',
                    backdrop_path: '/urSqvE0AyIHkYogUsQaVAmZrN0M.jpg',
                    popularity: 8.480629,
                    vote_count: 192,
                    video: false,
                    vote_average: 7.8
                }, {
                    poster_path: '/7xbm3OTScvBEfnnpny9JPNWqPlw.jpg',
                    adult: false,
                    overview: 'A boy attempts to deal with his mother\'s illness and the bullying of his classmates by escaping to a fantastical world.',
                    release_date: '2016-10-07',
                    genre_ids: [
                        18, 14
                    ],
                    id: 258230,
                    original_title: 'A Monster Calls',
                    original_language: 'en',
                    title: 'A Monster Calls',
                    backdrop_path: '/xVW8REyVqKwxAtUYY07UGlZH43L.jpg',
                    popularity: 7.77117,
                    vote_count: 175,
                    video: false,
                    vote_average: 6.7
                }
            ],
            dates: {
                maximum: '2017-02-08',
                minimum: '2016-12-28'
            },
            total_pages: 35,
            total_results: 697
        },
        error: '',
        favorites: []
    });
});
