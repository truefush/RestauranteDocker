FROM eclipse-temurin:11

RUN mkdir /opt/app

COPY target/restaurante-0.0.1-SNAPSHOT.jar /opt/app

EXPOSE 8080

CMD ["java", "-jar", "/opt/app/restaurante-0.0.1-SNAPSHOT.jar"]









