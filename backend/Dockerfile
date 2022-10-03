FROM openjdk:8-jdk-alpine

WORKDIR /var/jenkins_home/workspace/nopo/backend
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=build/libs/*.jar   

COPY ${JAR_FILE} backend.jar

ENTRYPOINT ["java","-jar","/backend.jar"]
