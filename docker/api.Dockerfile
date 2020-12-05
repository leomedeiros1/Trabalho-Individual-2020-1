FROM ruby:2.5.7

WORKDIR /code

COPY ./api_test.sh /test.sh

RUN chmod +x /test.sh

RUN gem update --system
RUN gem install bundler 