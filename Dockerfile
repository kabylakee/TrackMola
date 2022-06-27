# Angular Build
FROM node:latest AS appBuild
WORKDIR /app
COPY . .
RUN npm i && node ./node_modules/@angular/cli/bin/ng build --output-path dist/45kvqbb9nk4jfia79hdpi2ymgwr976nl --base-href /45kvqbb9nk4jfia79hdpi2ymgwr976nl/

# Copy to image
FROM nginx:latest
RUN rm /usr/share/nginx/html/index.html
COPY --from=appBuild /app/dist/ /usr/share/nginx/html
RUN echo 'server { listen 80; root /usr/share/nginx/html/45kvqbb9nk4jfia79hdpi2ymgwr976nl; location / { rewrite /45kvqbb9nk4jfia79hdpi2ymgwr976nl(/.*) $1; try_files $uri $uri/ /index.html =404;}}' > /etc/nginx/conf.d/default.conf
EXPOSE 80