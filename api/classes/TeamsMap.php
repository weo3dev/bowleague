<?php

class TeamsMap extends Mapper {
    public function getTeams() {
        $sql = "SELECT tid, tname
				FROM bnp_teams
				ORDER BY tname ASC";
        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
    }

    public function getFullTeam($team) {

        $sql = "SELECT tname, bnp_players.pid as pid, pname, SUM(g1 + g2 + g3) as tpins, COUNT(wid)*3 as gms,
                ROUND(SUM(g1 + g2 + g3)/(COUNT(wid)*3), 0) as avgs,
                hnd
                FROM bnp_teams, bnp_players
                JOIN bnp_stats
                ON bnp_stats.pid = bnp_players.pid
                WHERE bnp_teams.tid = $team AND bnp_players.tid = $team
                GROUP BY pid";

        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
    }

    public function getTeamPinsWeekly($team) {
        $sql = "SELECT wid, tname, SUM(g1+g2+g3+(hnd*3)) as pins
                FROM bnp_players
                JOIN bnp_teams
                ON bnp_players.tid = bnp_teams.tid
                JOIN bnp_stats
                ON bnp_players.pid = bnp_stats.pid
                WHERE bnp_teams.tid = $team
                GROUP BY bnp_teams.tid, wid"

        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
    }

}

?>


