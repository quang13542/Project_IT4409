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
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `city_id` int NOT NULL,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'Starry Sky Hotel',32,3),(2,'Dream Oasis Hotel',23,4),(3,'Paradise Meadows Hotel',41,3),(4,'Mystical Manor Hotel',21,4),(5,'Tranquility Shores Hotel',32,4),(6,'Willow Tree Hotel',49,3),(7,'Starstruck Sands Hotel',18,5),(8,'Ivory Breeze Hotel',40,3),(9,'Lily Blossom Hotel',3,4),(10,'Mountain Retreat Hotel',22,5),(11,'Radiant Orchid Hotel',28,3),(12,'Spring Serenade Hotel',1,4),(13,'Enchanted Paradise Hotel',44,5),(14,'Crystal Haven Hotel',6,5),(15,'Tranquil Retreat Hotel',31,5),(16,'Aurora Sky Hotel',47,4),(17,'Meadowbrook Hotel',50,3),(18,'Secret Garden Hotel',42,4),(19,'Lily Springs Hotel',48,3),(20,'Sunrise Sanctuary Hotel',11,5),(21,'Paradise Manor Hotel',34,4),(22,'Silver Pine Hotel',24,4),(23,'Aurora Valley Hotel',6,4),(24,'Harmony Gardens Hotel',8,4),(25,'Tranquil Haven Hotel',16,5),(26,'Dreamland Retreat Hotel',18,5),(27,'Spring Symphony Hotel',11,4),(28,'Secret Sanctuary Hotel',22,4),(29,'Sunset Beach Hotel',40,4),(30,'Azure Bay Hotel',38,4),(31,'Dreamland Meadows Hotel',33,3),(32,'Coastal Crest Hotel',24,3),(33,'Harmony Cove Hotel',8,3),(34,'Harmony Heights Hotel',2,3),(35,'Sunset Haven Hotel',49,3),(36,'Velvet Breeze Hotel',45,4),(37,'Emerald City Hotel',4,4),(38,'Velvet View Hotel',12,3),(39,'Moonlit Haven Hotel',49,3),(40,'Tranquility Point Hotel',16,5),(41,'Silver Star Hotel',12,3),(42,'Azure Dream Hotel',30,4),(43,'Serendipity Sands Hotel',24,5),(44,'Whispering Woods Hotel',11,5),(45,'Diamond Haven Hotel',37,3),(46,'Aurora Borealis Hotel',22,4),(47,'Radiant Woods Hotel',45,4),(48,'Harmony View Hotel',6,3),(49,'Tranquility Pines Hotel',46,4),(50,'Crystal Waters Hotel',39,3);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-03  8:52:47
