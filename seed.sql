\c country_game;

INSERT INTO faction (name) VALUES 
 ('USA')
,('Russa')
,('China')
,('Canada')
,('Mexico')
,('North Korea')
,('Great Britain')
;

INSERT INTO regions (click_count, is_parent) VALUES
 (1000000, true)
,(1488, false)
,(99999, false)
,(123456, false)
,(8888888, false)
,(-2, false)
,(3, true)
;

INSERT INTO user_performance (clicks_attk, clicks_dfnd) VALUES
 (10,10)
,(0,3)
,(0,0)
,(11,0)
,(11,12)
;