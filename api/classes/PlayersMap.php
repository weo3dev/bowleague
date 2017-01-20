<?php

class PlayersMap extends Mapper {
	public function getPlayers() {
        $sql = "SELECT bnp_players.pid AS pid, pname, bnp_teams.tname,
        		SUM( g1 + g2 + g3 ) AS tpins, COUNT( wid ) *3 AS gms, ROUND( SUM( g1 + g2 + g3 ) / ( COUNT( wid ) *3 ) , 0 ) AS avg, hnd
				FROM bnp_teams
				LEFT JOIN bnp_players ON bnp_teams.tid = bnp_players.tid
				JOIN bnp_stats ON bnp_stats.pid = bnp_players.pid
				GROUP BY pid
				ORDER BY pname";
        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
	}

	public function getPlayer($id) {

		$sql = "SELECT bnp_players.pid, bnp_players.tid as tname, pname, SUM(g1 + g2 + g3) as tpins, COUNT(wid)*3 as gms,
				ROUND(SUM(g1 + g2 + g3)/(COUNT(wid)*3), 0) as avgscore,
				hnd,
				GREATEST(MAX(g1), MAX(g2), MAX(g3)) AS hscore,
	            LEAST(MIN(g1), MIN(g2), MIN(g3)) as lscore
				FROM bnp_players
				JOIN bnp_stats
				WHERE bnp_stats.pid = $id AND bnp_players.pid = $id";	

        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
	}

}

?>
