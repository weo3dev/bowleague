<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once 'config/db.php';
require 'vendor/autoload.php';

spl_autoload_register(function ($classname) {
    require ("classes/" . $classname . ".php");
});

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$config['db']['host']   = DB_HOST;
$config['db']['user']   = DB_USERNAME;
$config['db']['pass']   = DB_PASSWORD;
$config['db']['dbname'] = DB_NAME;

$app = new \Slim\App(["settings" => $config]);

$container = $app->getContainer();

$container['db'] = function ($c) {
    $db = $c['settings']['db'];
    $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'], $db['user'], $db['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

$app->get('/standings', function ($request, $response) {
	$mapper = new StandingsMap($this->db);
	$standings = $mapper->getStandings();
	return $standings;
});

$app->get('/teams', function ($request, $response) {
	$mapper = new TeamsMap($this->db);
	$teams = $mapper->getTeams();
	$newResponse = $response->withJson($teams, 201);
	return $teams;
});

$app->get('/teams/{id}', function ($request, $response, $args) {
	$team_id = (int)$args['id'];
	$mapper = new TeamsMap($this->db);
	$team = $mapper->getTeam($team_id);
	return $team;
});

$app->get('/players', function ($request, $response) {
	$mapper = new PlayersMap($this->db);
	$players = $mapper->getPlayers();
	return $players;
});

$app->get('/players/{id}', function ($request, $response, $args) {
	$player_id = (int)$args['id'];
	$mapper = new PlayersMap($this->db);
	$player = $mapper->getPlayer($player_id);
	return $player;
});

$app->get('/leaders/{player}/{category}/{handicap}', function ($request, $response, $args) {
	$player = (string)$args['player'];
	$category = (string)$args['category'];
	$handicap = (string)$args['handicap'];
	$mapper = new LeadersMap($this->db);
	$leaders = $mapper->getLeaders($player,$category,$handicap);
	return $leaders;
});


$app->run();

