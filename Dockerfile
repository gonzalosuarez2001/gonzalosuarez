FROM node:20.11.1

RUN mkdir app

WORKDIR /var/www/html/app

COPY app /var/www/html/app/

COPY --chown=www-data:www-data package.json /var/www/html/app/package.json

RUN npm install

USER www-data

COPY --chown=www-data:www-data entrypoint.*.sh /usr/local/bin/

RUN chmod 775 /usr/local/bin/entrypoint.*.sh

EXPOSE 8080

USER root

ENTRYPOINT /usr/local/bin/entrypoint.*.sh

