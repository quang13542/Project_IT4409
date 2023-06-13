-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: hotel
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
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Hà Nội'),(2,'Hồ Chí Minh'),(3,'Đà Nẵng'),(4,'Huế'),(5,'Nha Trang'),(6,'Hội An'),(7,'Phú Quốc'),(8,'Đà Lạt'),(9,'Sapa'),(10,'Vũng Tàu'),(11,'Hải Phòng'),(12,'Cần Thơ'),(13,'Bắc Ninh'),(14,'Vinh'),(15,'Quảng Ninh'),(16,'Buôn Ma Thuột'),(17,'Long Xuyên'),(18,'Bà Rịa-Vũng Tàu'),(19,'Nam Định'),(20,'Tiền Giang');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `city_id` int NOT NULL,
  `room_id` int NOT NULL,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE CASCADE,
  CONSTRAINT `hotel_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=235 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'InterContinental Hanoi Westlake',1,101,4.5),(2,'Park Hyatt Saigon',2,102,3.8),(3,'Vinpearl Luxury',3,103,4.2),(4,'Pilgrimage Village Boutique Resort & Spa',4,104,4.4),(5,'Amiana Resort ',5,105,4.1),(6,'Sunrise Premium Resort ',6,106,3.9),(7,'La Veranda Resort Phu Quoc - MGallery',7,107,4.4),(8,'Terracotta Hotel ',8,108,3.7),(9,'Victoria Sapa Resort',9,109,4.2),(10,'Pullman Vung Tau',10,110,4.6),(11,'Pearl River Hai Phong Hotel',11,111,4.3),(12,'Vinpearl Hotel Can Tho',12,112,4.6),(13,'Ruby Hotel Bac Ninh',13,113,3.9),(14,'Vinpearl Hotel',14,114,4.1),(15,'Wyndham Legend Halong Hotel',15,115,4.4),(16,'Dakruco Hotel',16,116,4.7),(17,'The River Resort',17,117,3.8),(18,'Anoasis Beach Resort',18,118,4.2),(19,'Nam Cuong Hotel ',19,119,4.5),(20,'Van Phat Riverside Hotel',20,120,3.7);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adults` int NOT NULL,
  `children` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (101,2,1),(102,1,0),(103,1,2),(104,2,1),(105,2,0),(106,1,0),(107,2,1),(108,2,0),(109,3,2),(110,2,1),(111,2,0),(112,1,1),(113,2,2),(114,1,0),(115,2,1),(116,1,0),(117,2,2),(118,1,1),(119,2,0),(120,1,0);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

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
  KEY `user_id` (`user_id`),
  CONSTRAINT `service_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE,
  CONSTRAINT `service_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `checkin_smaller_than_checkout` CHECK ((`checkin` < `checkout`))
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,101,'2023-06-01 00:00:00','2023-06-04 00:00:00',5,3,1,1001),(2,102,'2023-06-02 00:00:00','2023-06-05 00:00:00',4,3,0,1002),(3,103,'2023-06-03 00:00:00','2023-06-06 00:00:00',3,3,1,1003),(4,104,'2023-06-04 00:00:00','2023-06-07 00:00:00',4,3,1,1004),(5,105,'2023-06-05 00:00:00','2023-06-08 00:00:00',3,3,1,1005),(6,106,'2023-06-06 00:00:00','2023-06-09 00:00:00',4,3,0,1006),(7,107,'2023-06-07 00:00:00','2023-06-10 00:00:00',3,3,1,1007),(8,108,'2023-06-08 00:00:00','2023-06-11 00:00:00',3,3,0,1008),(9,109,'2023-06-09 00:00:00','2023-06-12 00:00:00',4,3,1,1009),(10,110,'2023-06-10 00:00:00','2023-06-13 00:00:00',5,3,0,1010),(11,111,'2023-06-11 00:00:00','2023-06-15 00:00:00',4,4,1,1011),(12,112,'2023-06-12 00:00:00','2023-06-16 00:00:00',3,4,0,1012),(13,113,'2023-06-13 00:00:00','2023-06-17 00:00:00',5,4,1,1013),(14,114,'2023-06-14 00:00:00','2023-06-18 00:00:00',4,4,0,1014),(15,115,'2023-06-15 00:00:00','2023-06-19 00:00:00',3,4,1,1015),(16,116,'2023-06-16 00:00:00','2023-06-20 00:00:00',4,4,0,1016),(17,117,'2023-06-17 00:00:00','2023-06-21 00:00:00',5,4,1,1017),(18,118,'2023-06-18 00:00:00','2023-06-22 00:00:00',4,4,0,1018),(19,119,'2023-06-19 00:00:00','2023-06-23 00:00:00',3,4,1,1019),(20,120,'2023-06-20 00:00:00','2023-06-24 00:00:00',4,4,0,1020);
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1021 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1001,'NguyenVanAnh','1','nguyenvananh@gmail.com'),(1002,'TranThiBui','2','tranthibui@gmail.com'),(1003,'LeQuangChung','3','lequangchung@gmail.com'),(1004,'PhamThiDung','4','phamthidung@gmail.com'),(1005,'HoangVanDong','5','hoangvandong@gmail.com'),(1006,'NguyenThiNgan','6','nguyenthingan@gmail.com'),(1007,'TranVanGiang','7','tranvangiang@gmail.com'),(1008,'LeThiHuong','8','lethihuong@gmail.com'),(1009,'PhamVanDung','9','phamvandung@gmail.com'),(1010,'HoangThiNgan','10','hoangthingan@gmail.com'),(1011,'NguyenVanKien','K','nguyenvankien@gmail.com'),(1012,'TranThiLien','L','tranthilien@gmail.com'),(1013,'LeQuangManh','M','lequangmanh@gmail.com'),(1014,'PhamThiNgoc','N','phamthingoc@gmail.com'),(1015,'HoangVanThai','T','hoangvanthai@gmail.com'),(1016,'NguyenThiPhuong','P','nguyenthiphuong@gmail.com'),(1017,'TranVanQuang','Q','tranvanquang@gmail.com'),(1018,'LeThiThu','T','lethithu@gmail.com'),(1019,'PhamVanSang','S','phamvansang@gmail.com'),(1020,'HoangThiThao','T','hoangthithao@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-13 15:08:20
