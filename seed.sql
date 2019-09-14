\c country_game;

INSERT INTO factions (id, name) VALUES 
 ('00000000-0000-0000-facc-000000000001', 'USA')
,('00000000-0000-0000-facc-000000000002', 'Russia')
,('00000000-0000-0000-facc-000000000003', 'China')
,('00000000-0000-0000-facc-000000000004', 'Canada')
,('00000000-0000-0000-facc-000000000005', 'Mexico')
,('00000000-0000-0000-facc-000000000006', 'North Korea')
,('00000000-0000-0000-facc-000000000007', 'Great Britain')
;

INSERT INTO regions (id, owning_faction_id, click_count, name) VALUES
 ('00000000-0000-0000-beef-000000000001', 
  '00000000-0000-0000-facc-000000000001', 1000000, 'Oregon')        -- USA
,('00000000-0000-0000-beef-000000000002', 
  '00000000-0000-0000-facc-000000000001', 10, 'California')         -- USA
,('00000000-0000-0000-beef-000000000003', 
  '00000000-0000-0000-facc-000000000002', 99999, 'Moscow')          -- RUSSIA
,('00000000-0000-0000-beef-000000000004', 
  '00000000-0000-0000-facc-000000000005', 123456, 'Coahuila')       -- MEXICO
,('00000000-0000-0000-beef-000000000005', 
  '00000000-0000-0000-facc-000000000007', 8888888, 'Devonshire')    -- GB
,('00000000-0000-0000-beef-000000000006', 
  '00000000-0000-0000-facc-000000000006', -2, 'Pyongyang')          -- NC
,('00000000-0000-0000-beef-000000000007', 
  '00000000-0000-0000-facc-000000000003', 3, 'Manchuria')           -- CHINA
;

INSERT INTO users (username, password) VALUES
 ('username', 
  '$2b$10$Mu8.QpEbtR.YG2OFDPSmwuNzB.28d39UIX01vzryHVzDDRk00xjcS') --password
,('anotherusername', 
  '$2b$10$3Whqwtson67IX/aJSUTfeehkzdVNQCBmHOYuL3.nwv4BSBToS.Vju') --anotherpassword
,('anotherusername1234', 
  '$2b$10$QvG3712mHWdxqByxM.OH4uhBlnvhflVN/ueXpwlp1TfT6cJSfNOLa') --anotherpassword1234
;

INSERT INTO user_performance (clicks_attk, clicks_dfnd) VALUES
 (10,10)
,(0,3)
,(0,0)
,(11,0)
,(11,12)
;
