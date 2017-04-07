<?php

class LeadersMap extends Mapper {

	public function getLeaders($player, $category, $handicap) {

		// $player valid = m(ale), f(emale), t(eam)
		// $category valid = g(ame), s(eries)
		// $handicap valid = y(es), n(o)

		if($player === 'm') {

			// stats for mens individuals

			if($category === 'g') {

				if($handicap === 'y') {
					// get top three mens games, with handicap
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname,
							GREATEST( (MAX(g1)+hnd), (MAX(g2)+hnd), (MAX(g3)+hnd)) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'm'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
				} else {
					// get top three mens games, scratch
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, GREATEST(MAX(g1), MAX(g2), MAX(g3)) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'm'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
		        }

	        } else if ($category === 's') {

	        	if($handicap === 'y') {
	        		// get top three mens series, with handicap
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname,
							MAX(g1 + g2 + g3 + hnd) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'm'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
	        	} else {
	        		// get top three mens series, scratch
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, MAX(g1 + g2 + g3) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'm'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
	        	}
	        }
		}

		if($player === 'f') {

			// stats for womens individuals

			if($category === 'g') {

				if($handicap === 'y') {
					// get top three womens games, with handicap
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname,
							GREATEST( (MAX(g1)+hnd), (MAX(g2)+hnd), (MAX(g3)+hnd)) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'f'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
				} else {

					// get top three women, scratch
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, GREATEST(MAX(g1), MAX(g2), MAX(g3)) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'f'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
		        }

			} else if ($category === 's') {

	        	if($handicap === 'y') {
	        		// get top three womens series, with handicap
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname,
							MAX(g1 + g2 + g3 + hnd) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'f'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
	        	} else {
	        		// get top three womens series, scratch
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, MAX(g1 + g2 + g3) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'f'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
	        	}				
			}
		}


		if($player === 't') {

			// stats for teams
			
			if($category === 'g') {

				if($handicap === 'y') {

					// get top three team games, with handicap


				} else {
					// get top three team games, scratch

				}

			} else {

				if($handicap === 'y') {

					// get top three team series, with handicap
					$sql = "SELECT tname, SUM(g1+g2+g3+(hnd*3)) as pins
							FROM bnp_players
							JOIN bnp_teams
							ON bnp_players.tid = bnp_teams.tid
							JOIN bnp_stats
							ON bnp_players.pid = bnp_stats.pid
							GROUP BY bnp_teams.tid, wid
							ORDER BY pins DESC LIMIT 3";					


				} else {
					// get top three team series, scratch
					$sql = "SELECT tname, SUM(g1+g2+g3) as pins
							FROM bnp_players
							JOIN bnp_teams
							ON bnp_players.tid = bnp_teams.tid
							JOIN bnp_stats
							ON bnp_players.pid = bnp_stats.pid
							GROUP BY bnp_teams.tid, wid
							ORDER BY pins DESC LIMIT 3";

				}

			}
		}

        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
	}

}

?>
