set -e

until nc -z -v -w30 $DATABASE_HOST $DATABASE_PORT; do
 echo 'Waiting for PostgreSQL...'
 sleep 1
done
echo "PostgreSQL is up and running!"

yarn typeorm migration:run
yarn dev:server
