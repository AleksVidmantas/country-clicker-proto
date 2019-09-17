/* 
    Some useful queries 
    one uses to test
    will spring up like berries
    by Spring's warmth caressed

    And when joyful harvest
    will come to our lands
    we'll write down the queries
    extension: sql, name: test
*/

\c country_game;


/*
-- shows what factions own what regions
SELECT
    f.name,
    r.name
FROM factions f
LEFT JOIN regions r on r.owning_faction_id = f.id
ORDER BY f.name
;
*/
