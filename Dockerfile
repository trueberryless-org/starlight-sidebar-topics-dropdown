FROM httpd:2.4 AS runtime
COPY /docs/dist /usr/local/apache2/htdocs/
EXPOSE 80
EXPOSE 443
