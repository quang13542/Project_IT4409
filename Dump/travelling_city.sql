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
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Cà Mau'),(2,'Bắc Ninh'),(3,'Kiên Giang'),(4,'Phú Yên'),(5,'Tiền Giang'),(6,'Sóc Trăng'),(7,'Cần Thơ'),(8,'Thái Nguyên'),(9,'Hà Nam'),(10,'Hà Nội'),(11,'Bình Thuận'),(12,'Lạng Sơn'),(13,'Bạc Liêu'),(14,'Thừa Thiên-Huế'),(15,'Tuyên Quang'),(16,'Ninh Bình'),(17,'Hậu Giang'),(18,'Bến Tre'),(19,'Đồng Nai'),(20,'Lào Cai'),(21,'Trà Vinh'),(22,'Nam Định'),(23,'Yên Bái'),(24,'Khánh Hòa'),(25,'Bà Rịa-Vũng Tàu'),(26,'Hòa Bình'),(27,'Đà Nẵng'),(28,'Ninh Thuận'),(29,'Quảng Nam'),(30,'Vĩnh Long'),(31,'TP. Hồ Chí Minh'),(32,'Đồng Tháp'),(33,'Thanh Hóa'),(34,'Hà Tĩnh'),(35,'Sơn La'),(36,'Quảng Ninh'),(37,'Quảng Ngãi'),(38,'Nghệ An'),(39,'Phú Thọ'),(40,'Hải Phòng'),(41,'Long An'),(42,'Quảng Bình'),(43,'Vĩnh Phúc'),(44,'Bình Định'),(45,'Hải Dương'),(46,'Bắc Giang'),(47,'Quảng Trị'),(48,'An Giang'),(49,'Hòa Bình'),(50,'Bắc Kạn');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30  8:19:59
