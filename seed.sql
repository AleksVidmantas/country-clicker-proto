\c country_game;

INSERT INTO faction (id, name) VALUES 
 ('10000000-a234-4729-bd2a-68379df315fb', 'USA')
,('20000000-a234-4729-bd2a-68379df315fb', 'Russa')
,('30000000-a234-4729-bd2a-68379df315fb', 'China')
,('40000000-a234-4729-bd2a-68379df315fb', 'Canada')
,('50000000-a234-4729-bd2a-68379df315fb', 'Mexico')
,('60000000-a234-4729-bd2a-68379df315fb', 'North Korea')
,('70000000-a234-4729-bd2a-68379df315fb', 'Great Britain')
;

INSERT INTO regions (id, click_count, name) VALUES
 ('10000000-a234-4729-bd2a-68379df315fb', 1000000, 'Oregon')        -- USA
,('20000000-a234-4729-bd2a-68379df315fb', 1488, 'California')       -- USA
,('30000000-a234-4729-bd2a-68379df315fb', 99999, 'Moscow')          -- RUSSIA
,('40000000-a234-4729-bd2a-68379df315fb', 123456, 'Coahuila')       -- MEXICO
,('50000000-a234-4729-bd2a-68379df315fb', 8888888, 'Devonshire')    -- GB
,('60000000-a234-4729-bd2a-68379df315fb', -2, 'Pyongyang')          -- NC
,('70000000-a234-4729-bd2a-68379df315fb', 3, 'Manchuria')           -- CHINA
;

INSERT INTO region_ownership (region_id, faction_id) VALUES
 ('10000000-a234-4729-bd2a-68379df315fb', '10000000-a234-4729-bd2a-68379df315fb')
,('20000000-a234-4729-bd2a-68379df315fb', '10000000-a234-4729-bd2a-68379df315fb')
,('30000000-a234-4729-bd2a-68379df315fb', '20000000-a234-4729-bd2a-68379df315fb')
,('40000000-a234-4729-bd2a-68379df315fb', '50000000-a234-4729-bd2a-68379df315fb')
,('50000000-a234-4729-bd2a-68379df315fb', '70000000-a234-4729-bd2a-68379df315fb')
,('60000000-a234-4729-bd2a-68379df315fb', '60000000-a234-4729-bd2a-68379df315fb')
,('70000000-a234-4729-bd2a-68379df315fb', '30000000-a234-4729-bd2a-68379df315fb')
;

INSERT INTO users (username, password) VALUES
 ('username', '$2b$10$Mu8.QpEbtR.YG2OFDPSmwuNzB.28d39UIX01vzryHVzDDRk00xjcS') --password
,('anotherusername', '$2b$10$3Whqwtson67IX/aJSUTfeehkzdVNQCBmHOYuL3.nwv4BSBToS.Vju') --anotherpassword
,('anotherusername1234', '$2b$10$QvG3712mHWdxqByxM.OH4uhBlnvhflVN/ueXpwlp1TfT6cJSfNOLa') --anotherpassword1234
;

INSERT INTO user_performance (clicks_attk, clicks_dfnd) VALUES
 (10,10)
,(0,3)
,(0,0)
,(11,0)
,(11,12)
;
