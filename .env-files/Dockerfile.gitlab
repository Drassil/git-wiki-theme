FROM ruby:2.7.0

ENV LC_ALL=C.UTF-8=value

ADD . /srv/jekyll

WORKDIR /srv/jekyll

RUN bundle install --gemfile=.env-files/Gemfile.gitlab

EXPOSE 4000