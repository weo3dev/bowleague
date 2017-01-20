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

    public function getTeam($id) {
        $sql = "SELECT tid, tname
                FROM bnp_teams
                WHERE bnp_teams.tid = $id
                LIMIT 1";
        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
    }    
}

?>

