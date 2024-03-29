-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: travelling
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_id` int NOT NULL,
  `checkin` datetime DEFAULT NULL,
  `checkout` datetime DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `nights` int NOT NULL,
  `duty` tinyint(1) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `room_id` (`room_id`),
  KEY `service_ibfk_2_idx` (`user_id`),
  CONSTRAINT `service_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `checkin_smaller_than_checkout` CHECK ((`checkin` < `checkout`))
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,3,'2023-05-29 19:22:54','2023-06-05 10:42:56',5,5,1,1022),(2,23,'2023-06-27 00:54:37','2023-07-01 09:29:27',5,4,1,1001),(3,18,'2023-06-27 00:54:37','2023-06-29 20:29:36',2,2,1,1027),(4,42,'2023-06-27 00:54:36','2023-06-28 21:27:39',3,1,0,1022),(5,20,'2023-06-27 00:54:37','2023-07-03 06:30:52',4,6,0,1039),(6,46,'2023-06-14 17:18:09','2023-06-21 01:40:55',2,5,1,1030),(7,30,'2023-06-30 06:21:33','2023-07-07 03:12:05',2,7,1,1046),(8,18,'2023-06-08 07:10:34','2023-06-14 14:55:08',5,6,0,1038),(9,19,'2023-06-06 07:04:00','2023-06-13 02:23:22',2,6,1,1017),(10,47,'2023-06-14 20:59:38','2023-06-15 22:27:40',3,1,0,1046),(11,39,'2023-06-14 05:38:40','2023-06-18 18:39:37',2,3,1,1048),(12,3,'2023-05-31 19:25:11','2023-06-05 02:30:35',4,5,1,1016),(13,27,'2023-06-14 09:35:13','2023-06-19 12:03:37',4,5,1,1003),(14,11,'2023-06-24 02:14:32','2023-06-27 04:34:51',5,3,0,1010),(15,10,'2023-06-24 11:45:25','2023-06-29 12:30:07',5,5,0,1043),(16,19,'2023-06-27 00:54:36','2023-07-01 21:09:15',3,4,0,1047),(17,2,'2023-06-18 21:51:59','2023-06-25 18:51:19',2,7,1,1023),(18,34,'2023-06-27 00:54:37','2023-07-02 00:17:53',5,5,0,1008),(19,29,'2023-06-30 12:06:19','2023-07-05 22:56:35',3,5,0,1032),(20,24,'2023-06-02 18:02:47','2023-06-04 21:29:50',4,2,0,1045),(21,14,'2023-06-20 19:30:23','2023-06-24 02:32:31',2,4,0,NULL),(22,10,'2023-06-27 00:54:37','2023-07-03 13:03:25',5,5,1,1036),(23,33,'2023-06-27 00:54:37','2023-06-29 02:27:44',3,2,1,1008),(24,12,'2023-06-11 05:32:35','2023-06-12 12:43:29',4,1,1,1012),(25,15,'2023-06-28 02:18:43','2023-07-03 00:36:49',3,5,0,1024),(26,34,'2023-06-02 19:05:48','2023-06-04 17:54:11',2,2,1,1027),(27,32,'2023-06-27 00:54:36','2023-07-02 21:44:14',3,5,0,1034),(28,20,'2023-06-27 00:54:37','2023-06-28 01:51:27',2,1,1,1015),(29,34,'2023-06-27 00:54:36','2023-07-03 01:46:56',4,6,0,1012),(30,36,'2023-06-30 11:29:23','2023-07-03 15:28:55',2,3,0,1021),(31,5,'2023-06-10 18:41:43','2023-06-13 21:20:48',2,3,0,1002),(32,16,'2023-06-19 07:12:37','2023-06-23 23:18:07',4,4,0,1044),(33,8,'2023-06-27 00:54:36','2023-06-28 12:25:47',4,1,0,1017),(34,44,'2023-06-16 15:50:34','2023-06-18 14:05:22',4,2,1,1009),(35,10,'2023-06-27 00:54:37','2023-06-29 11:25:27',4,2,0,1007),(36,22,'2023-06-27 00:54:36','2023-07-03 09:51:20',4,5,0,1034),(37,1,'2023-06-13 20:30:41','2023-06-19 02:15:10',2,6,0,1044),(38,41,'2023-06-27 00:54:37','2023-07-03 12:33:34',4,6,1,1040),(39,13,'2023-07-04 20:47:01','2023-07-11 03:05:45',3,7,0,1006),(40,41,'2023-06-27 00:54:37','2023-06-29 06:44:24',5,2,0,1034),(41,5,'2023-06-28 13:39:56','2023-07-04 16:40:26',5,6,1,1025),(42,30,'2023-06-07 09:32:22','2023-06-10 22:00:19',3,4,0,1014),(43,3,'2023-06-27 00:54:36','2023-07-03 22:37:16',5,5,0,1009),(44,44,'2023-06-13 14:43:25','2023-06-14 11:10:50',5,1,1,NULL),(45,4,'2023-07-02 10:57:29','2023-07-08 04:51:55',4,6,1,1003),(46,25,'2023-06-20 15:08:11','2023-06-22 00:56:20',3,2,0,1035),(47,34,'2023-06-27 00:54:36','2023-07-01 23:55:18',4,4,0,1047),(48,36,'2023-06-24 22:08:31','2023-06-30 03:38:43',5,6,1,NULL),(49,43,'2023-06-03 14:23:55','2023-06-07 01:48:19',4,3,1,NULL),(50,24,'2023-06-18 19:49:40','2023-06-19 22:48:56',4,1,1,NULL);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `service_BEFORE_INSERT` BEFORE INSERT ON `service` FOR EACH ROW BEGIN
	if exists (
		select 1
        from `service`
        where room_id = new.room_id
        and (
			(checkin between new.checkin and new.checkout) or
            (checkout between new.checkin and new.checkout)
        )
    ) then
		signal sqlstate '45000'
		set message_text = 'The checkin and checkout dates cannot overlap with any other service for the same room';
	end if;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trigger_name` BEFORE INSERT ON `service` FOR EACH ROW BEGIN
 	if exists (
 		select 1
         from `service`
         where room_id = new.room_id
         and (
 			(checkin between new.checkin and new.checkout) or
             (checkout between new.checkin and new.checkout)
         )
     ) then
 		signal sqlstate '45000'
 		set message_text = 'The checkin and checkout dates cannot overlap with any other service for the same room';
 	end if;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-03  9:36:11
