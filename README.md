# CTT Online Shopping Website - Comprehensive Solution

## **Overview**
The CTT Online Shopping Website is designed to provide a seamless e-commerce experience for customers shopping for men's and women's clothing and accessories. The platform will include core e-commerce features such as product catalogs, secure payment systems, and order management while ensuring scalability, performance, and user-friendly interfaces.

---

## **System Requirements**

### **Functional Requirements**

1. **User Authentication**:
   - Users must log in using valid credentials.
   - Provide an option for social login via Facebook or Twitter.
   - Implement secure password recovery mechanisms.

2. **User Registration**:
   - New users must register by providing valid gender, email, password, and mobile number.
   - Support guest browsing for non-registered users.

3. **Admin Interface**:
   - Admins can add, update, and delete products.
   - Manage inventory and promotions.

4. **Product Search and Catalog**:
   - Search functionality with autocomplete and sorting (price, availability, rating, brand).
   - Display categorized product catalogs for men and women.
   - Support filters for price, color, and brand.

5. **Shopping Cart and Checkout**:
   - Users can add, update, or remove items from their cart.
   - Support guest checkout.
   - Allow multiple shipping addresses for a single order.

6. **Payment Gateway Integration**:
   - Accept secure payments via credit/debit cards, PayPal, and bank transfers.
   - Adhere to PCI-DSS standards for transaction security.

7. **Order Management**:
   - Users can track order status and view order history.
   - Vendors receive real-time notifications for new orders.

8. **Promotions and Discounts**:
   - Support BOGO, percentage-based, and time-limited discounts.
   - Admins can manage promotions.

9. **Customer Engagement**:
   - Implement product reviews and ratings with moderation.
   - Provide live chat, email, and contact forms for customer support.

10. **Stock Management**:
    - Automated inventory tracking with low-stock alerts.

11. **Additional Pages**:
    - Include features like testimonials, new products, and a "Contact Us" page.

---

## **Non-Functional Requirements**

### **Categorization and Metrics**

| **Category**            | **Requirement**                                                                                                  | **Metrics**                                                                                      |
|--------------------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Performance**          | System should support 10,000 simultaneous users during peak traffic.                                             | - Average page load time: <2 seconds for browsing, <5 seconds for checkout.                     |
| **Scalability**          | Must scale to handle future growth.                                                                              | - Auto-scaling to support 3x the current traffic.                                               |
| **Availability**         | Ensure continuous service availability globally.                                                                | - Target uptime: 99.9%.                                                                          |
| **Security**             | Protect user data and transactions.                                                                             | - Data encrypted using AES-256; PCI-DSS compliance for payment systems.                         |
| **Compliance**           | Adhere to GDPR for data protection.                                                                             | - Implement GDPR-compliant user data controls.                                                  |
| **Usability**            | Provide a seamless experience across all platforms.                                                             | - Support responsive design for web, mobile, and tablets.                                       |
| **Maintainability**      | Ensure quick recovery and efficient updates.                                                                    | - Mean Time to Recovery (MTTR): <15 minutes.                                                    |
| **Reliability**          | Real-time sync for orders and inventory.                                                                        | - Inventory updates latency: <2 seconds.                                                        |
| **Portability**          | The solution should support on-premises and cloud deployment.                                                   | - Compatible with major cloud providers (AWS, Azure).                                           |

---

## **System Context Diagram**

### **Key Components**:
1. **Frontend**:
   - React.js for responsive web interfaces.
   - Web and mobile access.
2. **Backend**:
   - Golang microservices for authentication, product catalog, order management, and payments.
3. **Database**:
   - PostgreSQL for relational data (users, products, orders).
   - Redis for caching and session storage.
4. **Payment Gateway**:
   - Integration with PayPal and Razorpay.
5. **Hosting**:
   - AWS ECS for containerized deployments.
6. **Monitoring**:
   - Prometheus and Grafana for system health monitoring.

---

## **Proposed NFRs for CTT Online Shopping Website**

### **Mind Map for NFRs**

**Central Node**: CTT Online Shopping NFRs  
- **Performance**: Low Latency, Traffic Handling  
- **Scalability**: Auto-Scaling, Future Load Handling  
- **Security**: PCI-DSS Compliance, Data Encryption  
- **Compliance**: GDPR  
- **Availability**: Redundancy, Global Accessibility  
- **Maintainability**: Efficient Updates, Monitoring Tools  
- **Usability**: Multi-Platform Compatibility  

---

## **Questionnaire for Stakeholders**

| **Question**                                                                                              | **Category**         |
|----------------------------------------------------------------------------------------------------------|----------------------|
| What is the expected peak user load during promotions and sales?                                         | Scalability          |
| Are there specific uptime requirements or acceptable maintenance windows?                                | Availability         |
| What payment methods and gateways do you prefer integrating with the system?                             | Payment, Security    |
| How quickly should stock updates reflect across the platform?                                            | Reliability          |
| Are there plans for multilingual or multi-currency support?                                              | Usability, Portability |
| How do you prioritize desktop, mobile, and tablet users?                                                 | Usability            |
| What is the acceptable page load time for core functionalities like catalog browsing and checkout?       | Performance          |
| What level of visibility do you need for system logs and performance monitoring?                         | Auditability         |

---

## **Assumptions**

| **Assumption**                                                                                           | **Linked NFRs**       |
|----------------------------------------------------------------------------------------------------------|-----------------------|
| AWS cloud services will be used for hosting and auto-scaling.                                            | Scalability, Availability |
| Payment gateways are responsible for PCI-DSS compliance.                                                 | Security              |
| Sensitive user data will be encrypted at rest and in transit using AES-256.                              | Security              |
| Responsive design will ensure compatibility across web and mobile platforms.                             | Usability             |
| Monitoring tools like Prometheus will ensure system health and quick incident response.                  | Maintainability       |
| Initial deployment will support only English, with plans for future multilingual support.                | Portability           |

---

This document provides a structured understanding of the CTT Online Shopping Website's requirements, ensuring alignment with business goals and technical needs.

